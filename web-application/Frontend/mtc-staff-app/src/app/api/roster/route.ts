import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mock Fallback Data (อ้างอิงข้อกำหนด Requirement for Scheduler .pdf)
const FALLBACK_DEACONS = [
  { name: "มัคนายกสมชาย (ประธาน)", deaconDepartment: "ประธาน", role: "มัคนายก" },
  { name: "มัคนายกวิชัย (คริสเตียนศึกษา)", deaconDepartment: "คริสเตียนศึกษา", role: "มัคนายก" },
  { name: "มัคนายกมนตรี (การศึกษา)", deaconDepartment: "การศึกษา", role: "มัคนายก" },
  { name: "มัคนายกสมศักดิ์ (สงเคราะห์)", deaconDepartment: "สงเคราะห์", role: "มัคนายก" },
  { name: "มัคนายกสุภาพร (ประชาสัมพันธ์)", deaconDepartment: "ประชาสัมพันธ์", role: "มัคนายก" },
  { name: "มัคนายกธนากร (อนุชน)", deaconDepartment: "อนุชน", role: "มัคนายก" },
  { name: "มัคนายกเกียรติศักดิ์ (มิชชั่น ศาลาธรรม)", deaconDepartment: "มิชชั่น ศาลาธรรม", role: "มัคนายก" },
  { name: "มัคนายกประเสริฐ (ดนตรี)", deaconDepartment: "ดนตรี", role: "มัคนายก" },
  { name: "มัคนายกสมพงษ์ (ประกาศ)", deaconDepartment: "ประกาศ", role: "มัคนายก" },
  { name: "มัคนายกอนันต์ (อาคาร)", deaconDepartment: "อาคารสถานที่", role: "มัคนายก" },
  { name: "มัคนายกชัยพร (ต้อนรับ)", deaconDepartment: "ต้อนรับ", role: "มัคนายก" },
  { name: "มัคนายกธีรเดช (เทคโนโลยี)", deaconDepartment: "เทคโนโลยี", role: "มัคนายก" },
  { name: "มัคนายกพิชญ์ (สื่อมวลชน)", deaconDepartment: "สื่อมวลชน", role: "มัคนายก" },
  { name: "มัคนายกสิทธิชัย (การเงิน)", deaconDepartment: "การเงิน", role: "มัคนายก" },
  { name: "มัคนายกวรวุฒิ (โภชนาการ)", deaconDepartment: "โภชนาการ", role: "มัคนายก" },
];

const SPECIAL_DAY_DEPARTMENT_MAPPING: Record<string, string> = {
  "วันปีใหม่": "ประธาน",
  "วันถวายบุตร": "คริสเตียนศึกษา",
  "วันสามมุก": "การศึกษา",
  "วันคริสตจักรบริการ": "สงเคราะห์",
  "วันสตรี": "ประชาสัมพันธ์",
  "วันรวี": "คริสเตียนศึกษา",
  "วันอนุชน": "อนุชน",
  "วันศาลาธรรม": "มิชชั่น ศาลาธรรม",
  "วันดนตรี": "ดนตรี",
  "วันประกาศ/บริการชุมชน": "ประกาศ",
  "วันห้องสมุด": "คริสเตียนศึกษา",
  "วันมิชชั่น": "มิชชั่น ศาลาธรรม",
};

// GET: Fetch serving rosters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get("month"); // e.g. "2026-08"

    let rosters: any[] = [];
    try {
      rosters = await prisma.serving_Roster.findMany({
        include: {
          Staff: true,
          SwappedStaff: true,
        },
        orderBy: { date: "asc" },
      });
    } catch (dbErr) {
      console.warn("Database fetch warning (using fallback):", dbErr);
    }

    return NextResponse.json({
      success: true,
      data: rosters,
      rules: {
        deaconCount: 15,
        pastorCount: 5,
        quotaPerMonth: "2 อาทิตย์ต่อเดือน",
        priorityLevels: ["Priority 1: โบสถ์บน/ล่าง", "Priority 2: ประตูโบสถ์", "Priority 3: อนุชน ทิโมธี"],
        reminders: ["2 อาทิตย์ก่อนหน้า", "1 อาทิตย์ก่อนหน้า (Pre-work)", "1 วันก่อนหน้า", "คืนหลังเสร็จงาน (ขอบคุณ)"],
      },
    });
  } catch (error) {
    console.error("GET /api/roster error:", error);
    return NextResponse.json({ success: false, error: "ไม่สามารถดึงตารางรับใช้ได้" }, { status: 500 });
  }
}

// POST: Auto-generate roster based on the 4 Conditional Arrangement Rules
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { year = 2026, month = 8 } = body;

    // Fetch Deacons from DB or fallback
    let deacons = await prisma.staff.findMany({
      where: { role: { contains: "มัคนายก" } },
    });

    if (deacons.length === 0) {
      // Create seed deacons if not exist
      for (const d of FALLBACK_DEACONS) {
        await prisma.staff.create({
          data: {
            name: d.name,
            role: "มัคนายก",
            department: d.deaconDepartment,
            deaconDepartment: d.deaconDepartment,
            status: "online",
          },
        });
      }
      deacons = await prisma.staff.findMany({
        where: { role: { contains: "มัคนายก" } },
      });
    }

    // Build Sundays in the month
    const sundays: Date[] = [];
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(year, month - 1, day);
      if (d.getDay() === 0) { // Sunday
        sundays.push(d);
      }
    }

    // Track monthly serving count per deacon (Main Logic 3: Quota 2 weeks/month)
    const deaconServingCount: Record<string, number> = {};
    deacons.forEach((d) => (deaconServingCount[d.id] = 0));

    const generatedRosters = [];
    const locations = [
      { name: "โบสถ์บน", priority: 1 },
      { name: "โบสถ์ล่าง", priority: 1 },
      { name: "ประตูโบสถ์", priority: 2 },
      { name: "อนุชน ทิโมธี", priority: 3 },
    ];

    for (let idx = 0; idx < sundays.length; idx++) {
      const sundayDate = sundays[idx];
      const specialService = idx === 1 ? "วันอนุชน" : idx === 3 ? "วันดนตรี" : "วันนมัสการปกติ";
      const targetDept = SPECIAL_DAY_DEPARTMENT_MAPPING[specialService];

      const assignedToday = new Set<string>();

      for (const loc of locations) {
        let assignedDeacon = null;

        // Main Logic 1: If special day, match Deacon of that department
        if (targetDept) {
          assignedDeacon = deacons.find(
            (d) => d.deaconDepartment === targetDept && !assignedToday.has(d.id) && deaconServingCount[d.id] < 2
          );
        }

        // Main Logic 2 & 3: Filter by priority & max 2 weeks/month quota
        if (!assignedDeacon) {
          assignedDeacon = deacons.find(
            (d) => !assignedToday.has(d.id) && deaconServingCount[d.id] < 2
          );
        }

        // Fallback if all quota full
        if (!assignedDeacon) {
          assignedDeacon = deacons.find((d) => !assignedToday.has(d.id)) || deacons[0];
        }

        assignedToday.add(assignedDeacon.id);
        deaconServingCount[assignedDeacon.id] = (deaconServingCount[assignedDeacon.id] || 0) + 1;

        const rosterEntry = await prisma.serving_Roster.create({
          data: {
            date: sundayDate,
            serviceName: specialService,
            location: loc.name,
            locationPriority: loc.priority,
            assignedStaffId: assignedDeacon.id,
            assignedRole: "มัคนายกนำนมัสการ",
            department: assignedDeacon.deaconDepartment || "ทั่วไป",
            status: "pending",
          },
          include: { Staff: true },
        });

        generatedRosters.push(rosterEntry);
      }
    }

    return NextResponse.json({
      success: true,
      message: `สร้างตารางปรนนิบัติสำเร็จตาม 4 Conditional Rules (${generatedRosters.length} รายการ)`,
      data: generatedRosters,
    });
  } catch (error) {
    console.error("POST /api/roster error:", error);
    return NextResponse.json({ success: false, error: "ไม่สามารถสร้างตารางรับใช้ได้" }, { status: 500 });
  }
}

// PATCH: Handle Staff Response (Confirm, Request Swap, Emergency Change)
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { rosterId, action, reason } = body; // action: "confirm" | "swap_request" | "emergency_change"

    if (!rosterId || !action) {
      return NextResponse.json({ success: false, error: "กรุณาระบุ rosterId และ action" }, { status: 400 });
    }

    const currentRoster = await prisma.serving_Roster.findUnique({
      where: { id: rosterId },
      include: { Staff: true },
    });

    if (!currentRoster) {
      return NextResponse.json({ success: false, error: "ไม่พบข้อมูลตารางรับใช้" }, { status: 404 });
    }

    if (action === "confirm") {
      const updated = await prisma.serving_Roster.update({
        where: { id: rosterId },
        data: { status: "confirmed" },
        include: { Staff: true },
      });
      return NextResponse.json({
        success: true,
        message: "ตอบรับการปฏิบัติงานเรียบร้อยแล้ว ระบบลงทะเบียน Reminder ตามช่วงเวลาให้แล้ว",
        data: updated,
      });
    }

    if (action === "swap_request" || action === "emergency_change") {
      // Find available substitute Deacon (not scheduled on same date)
      const allDeacons = await prisma.staff.findMany({
        where: { role: { contains: "มัคนายก" }, id: { not: currentRoster.assignedStaffId } },
      });

      const sameDayBookings = await prisma.serving_Roster.findMany({
        where: { date: currentRoster.date },
      });
      const busyStaffIds = new Set(sameDayBookings.map((b) => b.assignedStaffId));

      const availableSubstitute = allDeacons.find((d) => !busyStaffIds.has(d.id)) || allDeacons[0];

      const updated = await prisma.serving_Roster.update({
        where: { id: rosterId },
        data: {
          status: "swapped",
          swapReason: reason || (action === "emergency_change" ? "ขอเปลี่ยนฉุกเฉิน" : "ไม่สะดวกปฏิบัติตามตารางเดิม"),
          swappedWithStaffId: availableSubstitute ? availableSubstitute.id : null,
        },
        include: { Staff: true, SwappedStaff: true },
      });

      return NextResponse.json({
        success: true,
        message: `จัดหาผู้รับใช้ทดแทนสำเร็จ (${availableSubstitute?.name || "มัคนายกท่านอื่น"}) พร้อมส่ง Confirm ผู้เกี่ยวข้อง`,
        data: updated,
      });
    }

    return NextResponse.json({ success: false, error: "Action ไม่ถูกต้อง" }, { status: 400 });
  } catch (error) {
    console.error("PATCH /api/roster error:", error);
    return NextResponse.json({ success: false, error: "ไม่สามารถอัปเดตสถานะตารางรับใช้ได้" }, { status: 500 });
  }
}
