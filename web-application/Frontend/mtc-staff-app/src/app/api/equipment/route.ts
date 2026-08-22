import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MOCK_EXCEL_EQUIPMENTS } from "@/lib/mtcEquipmentSeedData";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const status = searchParams.get("status");

    let equipment = await prisma.equipment.findMany({
      where: {
        ...(type && { type }),
        ...(status && { status }),
      },
      orderBy: { name: "asc" },
    });

    if (equipment.length === 0) {
      try {
        await prisma.equipment.createMany({
          data: MOCK_EXCEL_EQUIPMENTS,
          skipDuplicates: true,
        });
        equipment = await prisma.equipment.findMany({
          where: {
            ...(type && { type }),
            ...(status && { status }),
          },
          orderBy: { name: "asc" },
        });
      } catch {
        equipment = MOCK_EXCEL_EQUIPMENTS as any;
      }
    }

    return NextResponse.json({ success: true, data: equipment });
  } catch (error) {
    console.error("GET /api/equipment error:", error);
    return NextResponse.json({ success: true, data: MOCK_EXCEL_EQUIPMENTS });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, type, serialNumber, location, qrCode, imageUrl, notes } = body;

    if (!name || !type || !qrCode) {
      return NextResponse.json({ success: false, error: "กรุณากรอกข้อมูลที่จำเป็น (name, type, qrCode)" }, { status: 400 });
    }

    const equipment = await prisma.equipment.create({
      data: { name, type, serialNumber, location, qrCode, imageUrl, notes },
    });

    return NextResponse.json({ success: true, data: equipment }, { status: 201 });
  } catch (error) {
    console.error("POST /api/equipment error:", error);
    return NextResponse.json({ success: false, error: "ไม่สามารถเพิ่มอุปกรณ์ได้" }, { status: 500 });
  }
}
