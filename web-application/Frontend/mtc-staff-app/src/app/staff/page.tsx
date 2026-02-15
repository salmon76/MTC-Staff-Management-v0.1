"use client";

import React, { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { STAFF_DATA } from "@/data/staff";
import { Staff } from "@/types";

// Status Indicator Component
const StatusDot = ({ status }: { status: string }) => {
    let color = "#BDBDBD"; // offline (gray)
    if (status === "online") color = "#66BB6A"; // active (green)
    if (status === "meeting") color = "#EF5350"; // busy (red)
    if (status === "leave") color = "#FFA726"; // away (orange)

    return (
        <div
            style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: color,
                border: "2px solid white",
                position: "absolute",
                bottom: 0,
                right: 0,
            }}
        />
    );
};

export default function StaffPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredStaff = STAFF_DATA.filter((staff) => {
        const matchesSearch = staff.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesFilter =
            filter === "All" ||
            (filter === "Pastors" && staff.department === "Pastoral") ||
            (filter === "Office" && staff.department === "Office") ||
            (filter === "Others" &&
                staff.department !== "Pastoral" &&
                staff.department !== "Office");

        return matchesSearch && matchesFilter;
    });

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "var(--background)",
                paddingBottom: 80, // Space for BottomNav
            }}
        >
            {/* Page Header (Simple version for Staff Page) */}
            <header
                className="safe-area-top"
                style={{
                    padding: "16px 20px",
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    position: "sticky",
                    top: 0,
                    zIndex: 40,
                    borderBottom: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h1
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                    }}
                >
                    Staff Directory
                </h1>

                {/* Add Button (Mock) */}
                <button
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "var(--mtc-red)",
                        color: "white",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </header>

            <main className="animate-fade-in" style={{ padding: "20px" }}>
                {/* Search Bar */}
                <div style={{ position: "relative", marginBottom: 20 }}>
                    <div
                        style={{
                            position: "absolute",
                            left: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "var(--text-tertiary)",
                        }}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search staff by name..."
                        className="mtc-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ paddingLeft: 40 }}
                    />
                </div>

                {/* Filter Chips */}
                <div
                    style={{
                        display: "flex",
                        gap: 8,
                        overflowX: "auto",
                        paddingBottom: 4,
                        marginBottom: 24,
                        scrollbarWidth: "none", // Hide scrollbar for cleaner look
                        msOverflowStyle: "none",
                    }}
                >
                    {["All", "Pastors", "Office", "Others"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: "6px 14px",
                                borderRadius: "20px",
                                fontSize: 13,
                                fontWeight: 600,
                                border: "none",
                                whiteSpace: "nowrap",
                                cursor: "pointer",
                                transition: "all var(--transition-fast)",
                                background:
                                    filter === f ? "var(--mtc-red)" : "var(--surface)",
                                color: filter === f ? "white" : "var(--text-secondary)",
                                boxShadow:
                                    filter === f
                                        ? "var(--shadow-red-sm)"
                                        : "0 2px 4px rgba(0,0,0,0.02)",
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Staff List */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {filteredStaff.map((staff) => (
                        <div
                            key={staff.id}
                            className="mtc-card"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "16px",
                                gap: 16,
                                cursor: "pointer",
                                transition: "transform var(--transition-spring)",
                            }}
                        >
                            {/* Avatar */}
                            <div style={{ position: "relative" }}>
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        background: staff.avatarBg || "#DDD",
                                        color: staff.avatarColor || "#000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 18,
                                        fontWeight: 700,
                                    }}
                                >
                                    {staff.name.split(" ")[1]
                                        ? staff.name.split(" ")[1].charAt(0)
                                        : staff.name.charAt(0)}
                                </div>
                                <StatusDot status={staff.status} />
                            </div>

                            {/* Info */}
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <h3
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {staff.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: 13,
                                        color: "var(--text-secondary)",
                                        marginBottom: 2,
                                    }}
                                >
                                    {staff.role}
                                </p>
                                <span
                                    style={{
                                        fontSize: 11,
                                        padding: "2px 6px",
                                        borderRadius: 4,
                                        background: "var(--background)",
                                        color: "var(--text-tertiary)",
                                        display: "inline-block",
                                    }}
                                >
                                    {staff.department}
                                </span>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: "flex", gap: 8 }}>
                                <a
                                    href={`tel:${staff.phone.replace(/-/g, "").replace(/\s/g, "")}`}
                                    aria-label={`Call ${staff.name}`}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        background: "#E8F5E9",
                                        color: "#2E7D32",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        transition: "transform 0.1s ease, background 0.2s",
                                        border: "1px solid #C8E6C9",
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}

                    {filteredStaff.length === 0 && (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "40px 0",
                                color: "var(--text-tertiary)",
                            }}
                        >
                            <p>No staff found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
