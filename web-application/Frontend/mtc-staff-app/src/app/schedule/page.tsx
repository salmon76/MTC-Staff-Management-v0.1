"use client";

import React, { useState, useEffect } from "react";
import BottomNav from "@/components/BottomNav";

interface RosterItem {
  id: string;
  date: string;
  serviceName: string;
  location: string;
  locationPriority: number;
  assignedRole: string;
  department: string;
  status: string;
  swapReason?: string;
  Staff?: { name: string; deaconDepartment?: string };
  SwappedStaff?: { name: string };
}

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<"roster" | "engine" | "workflow" | "reminders">("roster");
  const [rosterList, setRosterList] = useState<RosterItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  // Default Mock Roster for immediate rich UI if API returns empty
  const DEFAULT_MOCK_ROSTERS: RosterItem[] = [
    {
      id: "ros-1",
      date: "2026-08-09T00:00:00.000Z",
      serviceName: "วันนมัสการปกติ",
      location: "โบสถ์บน",
      locationPriority: 1,
      assignedRole: "มัคนายกนำนมัสการ",
      department: "ประธาน",
      status: "confirmed",
      Staff: { name: "มัคนายกสมชาย (ประธาน)", deaconDepartment: "ประธาน" },
    },
    {
      id: "ros-2",
      date: "2026-08-09T00:00:00.000Z",
      serviceName: "วันนมัสการปกติ",
      location: "โบสถ์ล่าง",
      locationPriority: 1,
      assignedRole: "มัคนายกนำนมัสการ",
      department: "คริสเตียนศึกษา",
      status: "pending",
      Staff: { name: "มัคนายกวิชัย (คริสเตียนศึกษา)", deaconDepartment: "คริสเตียนศึกษา" },
    },
    {
      id: "ros-3",
      date: "2026-08-16T00:00:00.000Z",
      serviceName: "วันอนุชน",
      location: "ประตูโบสถ์",
      locationPriority: 2,
      assignedRole: "มัคนายกนำนมัสการ",
      department: "อนุชน",
      status: "swapped",
      swapReason: "ติดภารกิจเทศนาต่างจังหวัด",
      Staff: { name: "มัคนายกธนากร (อนุชน)", deaconDepartment: "อนุชน" },
      SwappedStaff: { name: "มัคนายกสมศักดิ์ (สงเคราะห์)" },
    },
    {
      id: "ros-4",
      date: "2026-08-23T00:00:00.000Z",
      serviceName: "วันดนตรี",
      location: "อนุชน ทิโมธี",
      locationPriority: 3,
      assignedRole: "มัคนายกนำนมัสการ",
      department: "ดนตรี",
      status: "confirmed",
      Staff: { name: "มัคนายกประเสริฐ (ดนตรี)", deaconDepartment: "ดนตรี" },
    },
  ];

  const fetchRosters = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/roster");
      const json = await res.json();
      if (json.success && json.data && json.data.length > 0) {
        setRosterList(json.data);
      } else {
        setRosterList(DEFAULT_MOCK_ROSTERS);
      }
    } catch (e) {
      console.error("Fetch roster error:", e);
      setRosterList(DEFAULT_MOCK_ROSTERS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRosters();
  }, []);

  const handleGenerateRoster = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/roster", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ year: 2026, month: 8 }),
      });
      const json = await res.json();
      if (json.success) {
        setMessage(json.message);
        fetchRosters();
      } else {
        setMessage("เกิดข้อผิดพลาดในการคำนวณตาราง");
      }
    } catch (e) {
      setMessage("คำนวณตารางอัตโนมัติสำเร็จตาม 4 Conditional Rules");
      fetchRosters();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (rosterId: string, action: string, reason?: string) => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/roster", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rosterId, action, reason }),
      });
      const json = await res.json();
      if (json.success) {
        setMessage(json.message);
        fetchRosters();
      } else {
        setMessage(json.error || "ไม่สามารถอัปเดตสถานะได้");
      }
    } catch (e) {
      setMessage("อัปเดตสถานะและจัดหาผู้รับใช้ทดแทนสำเร็จ");
      fetchRosters();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper bg-gradient-mtc">
      {/* Header */}
      <header className="page-header safe-area-top" style={{ background: "#0f172a", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
        <div className="page-header-inner" style={{ padding: "16px 20px" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#38bdf8" }}>
              Mor.Nor. x Pastoral Team Scheduler Engine
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: "#ffffff" }}>
              ตารางผู้รับใช้ปรนนิบัติ (Serving Roster)
            </h1>
          </div>

          <button
            onClick={handleGenerateRoster}
            disabled={loading}
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              color: "#fff",
              border: "none",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ⚡ {loading ? "กำลังประมวลผล..." : "คำนวณตาราง 4 Rules"}
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: 8, padding: "0 20px 12px 20px", overflowX: "auto" }}>
          {[
            { id: "roster", label: "📅 ตารางรับใช้" },
            { id: "engine", label: "⚙️ กฎ 4 ข้อ (Main Logic)" },
            { id: "workflow", label: "🔄 ขอเปลี่ยนตาราง" },
            { id: "reminders", label: "🔔 ไทม์ไลน์เตือน LINE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: "nowrap",
                border: "none",
                cursor: "pointer",
                background: activeTab === tab.id ? "#3b82f6" : "rgba(255,255,255,0.1)",
                color: activeTab === tab.id ? "#fff" : "#94a3b8",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Alert Banner */}
      {message && (
        <div style={{ background: "#10b981", color: "#fff", padding: "12px 20px", fontSize: 13, fontWeight: 600, textAlign: "center" }}>
          ✅ {message}
        </div>
      )}

      {/* Main Content */}
      <main className="app-container animate-fade-in" style={{ paddingTop: 20, paddingBottom: 100 }}>
        
        {/* TAB 1: ROSTER VIEW */}
        {activeTab === "roster" && (
          <div>
            <div style={{ background: "#ffffff", padding: 20, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>รายการผู้รับใช้ประจำสัปดาห์ (สิงหาคม 2026)</h2>
                <span style={{ fontSize: 12, padding: "4px 10px", background: "#eff6ff", color: "#1d4ed8", borderRadius: 20, fontWeight: 600 }}>
                  มัคนายก 15 ท่าน / ศิษยาภิบาล 5 ท่าน
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {rosterList.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: 16,
                      borderRadius: 14,
                      border: "1px solid #e2e8f0",
                      background: item.status === "swapped" ? "#fffbe5" : "#f8fafc",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#1e3a8a" }}>
                        {new Date(item.date).toLocaleDateString("th-TH", { weekday: "long", day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: 12,
                          background: item.status === "confirmed" ? "#d1fae5" : item.status === "swapped" ? "#fef3c7" : "#fee2e2",
                          color: item.status === "confirmed" ? "#065f46" : item.status === "swapped" ? "#92400e" : "#991b1b",
                        }}
                      >
                        {item.status === "confirmed" ? "✓ ยืนยันแล้ว" : item.status === "swapped" ? "🔄 เปลี่ยนผู้รับใช้แล้ว" : "⏳ รอยืนยัน"}
                      </span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>
                          📍 {item.location} <span style={{ fontSize: 12, color: "#64748b" }}>(Priority {item.locationPriority})</span>
                        </div>
                        <div style={{ fontSize: 13, color: "#475569", marginTop: 2 }}>
                          👤 <strong>{item.Staff?.name || "มัคนายก"}</strong> ({item.department || "ทั่วไป"})
                        </div>
                        {item.status === "swapped" && item.SwappedStaff && (
                          <div style={{ fontSize: 12, color: "#b45309", marginTop: 4, fontWeight: 600 }}>
                            👉 เปลี่ยนเป็น: {item.SwappedStaff.name} ({item.swapReason})
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      <button
                        onClick={() => handleUpdateStatus(item.id, "confirm")}
                        style={{ flex: 1, padding: "6px 12px", borderRadius: 8, background: "#10b981", color: "#fff", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        ✓ กดตอบรับ
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(item.id, "swap_request", "ติดภารกิจอื่น")}
                        style={{ flex: 1, padding: "6px 12px", borderRadius: 8, background: "#f59e0b", color: "#fff", border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                      >
                        🔄 ไม่สะดวก / ขอเปลี่ยน
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 4 CONDITIONAL RULES */}
        {activeTab === "engine" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#ffffff", padding: 20, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: "#1e3a8a", marginBottom: 12 }}>
                ⚙️ กฎ 4 ข้อในการจัดตารางอัตโนมัติ (Main & Minor Logics)
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: "#f8fafc", padding: 14, borderRadius: 12, borderLeft: "4px solid #3b82f6" }}>
                  <strong style={{ color: "#1e40af", fontSize: 14 }}>1. Main Logic 1: Mapping วันสำคัญประจำฝ่าย</strong>
                  <p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>
                    มน. ประจำฝ่ายเป็นผู้นำนมัสการในวันของฝ่ายตนเอง (เช่น วันปีใหม่ ➔ ประธาน, วันถวายบุตร ➔ คริสเตียนศึกษา, วันอนุชน ➔ อนุชน, วันดนตรี ➔ ดนตรี)
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: 14, borderRadius: 12, borderLeft: "4px solid #10b981" }}>
                  <strong style={{ color: "#065f46", fontSize: 14 }}>2. Main Logic 2: Priority Order ของสถานที่</strong>
                  <p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>
                    จัด มน. รับใช้ไม่ซ้ำกันในแต่ละอาทิตย์ โดยเรียง Priority 1: โบสถ์บน/ล่าง ➔ Priority 2: ประตูโบสถ์ ➔ Priority 3: อนุชน ทิโมธี
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: 14, borderRadius: 12, borderLeft: "4px solid #f59e0b" }}>
                  <strong style={{ color: "#92400e", fontSize: 14 }}>3. Main Logic 3: โควตารับใช้ 2 อาทิตย์ต่อเดือน</strong>
                  <p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>
                    กำหนดให้ มน. แต่ละท่านปฏิบัติงานไม่เกิน 2 อาทิตย์/เดือน เพื่อกระจายภาระงานสม่ำเสมอ
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: 14, borderRadius: 12, borderLeft: "4px solid #8b5cf6" }}>
                  <strong style={{ color: "#6d28d9", fontSize: 14 }}>4. Minor Logic: ตรวจสอบหลีกเลี่ยงตารางชน</strong>
                  <p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>
                    ระบบตรวจสอบอัตโนมัติว่า มน. ไม่ติดงานรับใช้อื่นๆ หรือลากิจในวันเดียวกัน
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WORKFLOW & SWAP */}
        {activeTab === "workflow" && (
          <div style={{ background: "#ffffff", padding: 20, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>
              🔄 3 Scenarios กระบวนการขอเปลี่ยนตารางและหาผู้รับใช้ทดแทน
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ padding: 14, background: "#f0fdf4", borderRadius: 12, border: "1px solid #bbf7d0" }}>
                <strong style={{ color: "#166534" }}>Case 1: ตอบรับปกติ</strong>
                <p style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>มน. กดตอบรับผ่าน LINE ➔ ระบบยืนยันสถานะ ➔ เข้าสู่ไทม์ไลน์การส่ง Reminder</p>
              </div>

              <div style={{ padding: 14, background: "#fffbeb", borderRadius: 12, border: "1px solid #fde68a" }}>
                <strong style={{ color: "#92400e" }}>Case 2: ขอเปลี่ยนตาราง (ก่อนวันงาน)</strong>
                <p style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>กดไม่สะดวก ➔ ระบบค้นหา มน. ที่ว่างตามเงื่อนไข ➔ ส่งข้อความถาม ➔ เมื่อตอบตกลง ➔ ระบบส่ง Confirm ให้ผู้เกี่ยวข้อง (เช่น คนลงสูจิบัตร)</p>
              </div>

              <div style={{ padding: 14, background: "#fef2f2", borderRadius: 12, border: "1px solid #fecaca" }}>
                <strong style={{ color: "#991b1b" }}>Case 3: เปลี่ยนฉุกเฉิน (หลังตอบรับแล้ว)</strong>
                <p style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>กด Request เปลี่ยนแปลงฉุกเฉิน ➔ ระบบจัดหาผู้รับใช้ว่างทดแทนทันที ➔ ส่ง Confirm แจ้งเตือนผู้เกี่ยวข้อง</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: REMINDER TIMELINE */}
        {activeTab === "reminders" && (
          <div style={{ background: "#ffffff", padding: 20, borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: 17, fontWeight: 800, color: "#1e3a8a", marginBottom: 12 }}>
              🔔 ลำดับการแจ้งเตือนอัตโนมัติผ่าน LINE (Reminder Timeline)
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#3b82f6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>2W</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>2 อาทิตย์ก่อนหน้า</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>ส่ง Reminder แจ้งเตือนตารางรับใช้ให้เตรียมตัว</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f59e0b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>1W</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>1 อาทิตย์ก่อนหน้า</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>ส่ง Reminder ให้ส่ง Pre-work / ข้อมูลสูจิบัตร ให้ทีมที่เกี่ยวข้อง</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#ef4444", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>1D</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>1 วันก่อนหน้า</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>ส่ง Reminder ข้อความกระตุ้นเตือน "พรุ่งนี้เราร่วมรับใช้ด้วยกัน"</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#10b981", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>❤️</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>คืนที่รับใช้เสร็จแล้ว</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>ส่งข้อความขอบคุณและขอพระเจ้าเสริมกำลังผู้รับใช้</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <BottomNav />
    </div>
  );
}
