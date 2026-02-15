"use client";

import React, { useState } from "react";
import BottomNav from "@/components/BottomNav";

// Mock Data for Events and Tasks
const EVENTS_DATA = [
    {
        id: 1,
        title: "Morning Prayer",
        date: "2026-06-12",
        time: "06:00 - 07:00",
        description: "Lead prayer meeting",
        type: "Service",
        location: "Main Sanctuary",
        color: "#EF5350", // Red
    },
    {
        id: 2,
        title: "Staff Meeting",
        date: "2026-06-12",
        time: "09:00 - 11:00",
        description: "Weekly staff briefing",
        type: "Meeting",
        location: "Conference Room B",
        color: "#42A5F5", // Blue
    },
    {
        id: 3,
        title: "Prepare Sermon Slides",
        date: "2026-06-12",
        time: "14:00 - 16:00",
        description: "For Sunday Service",
        type: "Task",
        assignee: "Me",
        status: "pending",
        color: "#FFCA28", // Yellow
    },
    {
        id: 4,
        title: "Youth Outreach Planning",
        date: "2026-06-13",
        time: "17:00 - 19:00",
        description: "Community center visit",
        type: "Ministry",
        location: "Youth Hall",
        color: "#66BB6A", // Green
    },
    {
        id: 5,
        title: "Sunday Service",
        date: "2026-06-15",
        time: "09:00 - 12:00",
        description: "Main weekly service",
        type: "Service",
        location: "Main Sanctuary",
        color: "#EF5350",
    },
    {
        id: 6,
        title: "Visit Elder Boonmee",
        date: "2026-06-14",
        time: "13:00 - 15:00",
        description: "Pastoral care visit",
        type: "Task",
        assignee: "Me",
        status: "done",
        color: "#AB47BC", // Purple
    },
];

export default function EventsPage() {
    const [viewMode, setViewMode] = useState<"Day" | "Week" | "Month">("Month");
    const [activeTab, setActiveTab] = useState<"Calendar" | "MyTasks">("Calendar");

    // Mock Filtering Logic
    const filteredEvents = EVENTS_DATA.filter((event) => {
        // 1. Filter by Tab
        if (activeTab === "MyTasks" && event.type !== "Task") return false;
        // 2. Filter by View Mode (Simplified)
        if (viewMode === "Day" && event.date !== "2026-06-12") return false; // Show only today
        if (viewMode === "Week" && (event.date < "2026-06-12" || event.date > "2026-06-18")) return false; // Show this week

        return true; // Month shows all (simplified)
    });

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "var(--background)",
                paddingBottom: 80,
            }}
        >
            {/* Header */}
            <header
                className="safe-area-top"
                style={{
                    padding: "16px 20px",
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(10px)",
                    position: "sticky",
                    top: 0,
                    zIndex: 40,
                    borderBottom: "1px solid var(--border-light)",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>
                        {activeTab === "MyTasks" ? "My Tasks" : "Events"}
                    </h1>
                    <div style={{ fontSize: 14, color: "var(--mtc-red)", fontWeight: 600 }}>
                        {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                </div>

                {/* Tab Switcher: Calendar vs My Tasks */}
                <div
                    style={{
                        display: "flex",
                        background: "#F5F5F5",
                        padding: 4,
                        borderRadius: 12,
                        marginBottom: 12,
                    }}
                >
                    {(["Calendar", "MyTasks"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1,
                                padding: "8px 0",
                                borderRadius: 8,
                                border: "none",
                                background: activeTab === tab ? "white" : "transparent",
                                color: activeTab === tab ? "var(--mtc-red)" : "#757575",
                                fontWeight: activeTab === tab ? 600 : 500,
                                fontSize: 14,
                                boxShadow: activeTab === tab ? "0 2px 4px rgba(0,0,0,0.08)" : "none",
                                transition: "all 0.2s ease",
                                cursor: "pointer",
                            }}
                        >
                            {tab === "Annotate" ? "Annotate" : tab === "MyTasks" ? "Assignments" : "Calendar"}
                        </button>
                    ))}
                </div>

                {/* View Mode Switcher (Only visible in Calendar Tab) */}
                {activeTab === "Calendar" && (
                    <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
                        {(["Day", "Week", "Month"] as const).map((mode) => (
                            <button
                                key={mode}
                                onClick={() => setViewMode(mode)}
                                style={{
                                    padding: "6px 16px",
                                    borderRadius: 20,
                                    border: `1px solid ${viewMode === mode ? "var(--mtc-red)" : "#E0E0E0"}`,
                                    background: viewMode === mode ? "var(--mtc-red)" : "white",
                                    color: viewMode === mode ? "white" : "#757575",
                                    fontSize: 13,
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>
                )}
            </header>

            {/* Content List */}
            <main className="animate-fade-in" style={{ padding: "20px" }}>
                {filteredEvents.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "60px 0", color: "#9E9E9E" }}>
                        <div style={{ fontSize: 48, marginBottom: 16 }}>🗓️</div>
                        <p>No events found for this filter.</p>
                    </div>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="mtc-card"
                                style={{
                                    display: "flex",
                                    position: "relative",
                                    overflow: "hidden",
                                    padding: 0,
                                    cursor: "pointer",
                                }}
                            >
                                {/* Event Color Strip */}
                                <div
                                    style={{
                                        width: 6,
                                        background: event.color,
                                        flexShrink: 0,
                                    }}
                                />

                                <div style={{ padding: "16px", flex: 1 }}>
                                    {/* Date & Status Row */}
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                                        <span style={{
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: event.color,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5
                                        }}>
                                            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })} • {event.time.split('-')[0]}
                                        </span>
                                        {event.type === "Task" && (
                                            <span style={{
                                                fontSize: 10,
                                                padding: "2px 8px",
                                                borderRadius: 10,
                                                background: event.status === "done" ? "#E8F5E9" : "#FFF3E0",
                                                color: event.status === "done" ? "#2E7D32" : "#EF6C00",
                                                fontWeight: 600,
                                            }}>
                                                {event.status === "done" ? "DONE" : "PENDING"}
                                            </span>
                                        )}
                                    </div>

                                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#212121", marginBottom: 4 }}>
                                        {event.title}
                                    </h3>

                                    <p style={{ fontSize: 13, color: "#757575", display: "flex", alignItems: "center", gap: 6 }}>
                                        {event.type === "Task" ? "👤 Assigned to Me" : `📍 ${event.location}`}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Floating Action Button */}
            <button
                style={{
                    position: "fixed",
                    bottom: 90,
                    right: 20,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--mtc-red)",
                    color: "white",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(198, 40, 40, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 90,
                    cursor: "pointer",
                    transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
            // Add minimal hover effect if needed, but CSS hover is better
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>

            <BottomNav />
        </div>
    );
}
