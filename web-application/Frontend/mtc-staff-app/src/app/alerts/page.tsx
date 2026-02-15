"use client";

import React, { useState } from "react";
import BottomNav from "@/components/BottomNav";

// Mock Data for Alerts
const ALERTS_DATA = [
    {
        id: 1,
        title: "Urgent Prayer Request",
        message: "Mrs. Somjai has been admitted to ICU. Please pray.",
        date: "12 min ago",
        type: "Urgent", // Red
        read: false,
        color: "#EF5350",
    },
    {
        id: 2,
        title: "Meeting Reminder",
        message: "Staff meeting starts in 15 minutes at Room A.",
        date: "15 min ago",
        type: "Warning", // Yellow/Orange
        read: false,
        color: "#FFA726",
    },
    {
        id: 3,
        title: "Leave Approved",
        message: "Your leave request for 20-22 June has been approved.",
        date: "2 hours ago",
        type: "Success", // Green
        read: true,
        color: "#66BB6A",
    },
    {
        id: 4,
        title: "New Roster Published",
        message: "The roster for July is now available. Please check your schedule.",
        date: "Yesterday",
        type: "Info", // Blue
        read: true,
        color: "#42A5F5",
    },
    {
        id: 5,
        title: "System Maintenance",
        message: "The system will be down for maintenance tonight at 02:00 AM.",
        date: "2 days ago",
        type: "Info",
        read: true,
        color: "#9E9E9E", // Gray
    },
];

export default function AlertsPage() {
    const [alerts, setAlerts] = useState(ALERTS_DATA);

    const markAllAsRead = () => {
        const updatedAlerts = alerts.map((alert) => ({ ...alert, read: true }));
        setAlerts(updatedAlerts);
    };

    const deleteAlert = (id: number) => {
        setAlerts(alerts.filter(a => a.id !== id));
    }

    const unreadCount = alerts.filter(a => !a.read).length;

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
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>
                    Notifications
                    {unreadCount > 0 && <span style={{ marginLeft: 8, fontSize: 13, background: "#EF5350", color: "white", padding: "2px 8px", borderRadius: 12 }}>{unreadCount}</span>}
                </h1>
                {unreadCount > 0 && (
                    <button
                        onClick={markAllAsRead}
                        style={{
                            fontSize: 13,
                            color: "var(--mtc-red)",
                            background: "none",
                            border: "none",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}
                    >
                        Mark all read
                    </button>
                )}
            </header>

            {/* Alerts List */}
            <main className="animate-fade-in" style={{ padding: "16px" }}>
                {alerts.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-tertiary)" }}>
                        <div style={{ fontSize: 48, marginBottom: 16 }}>🔕</div>
                        <p>No notifications right now.</p>
                    </div>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {alerts.map((alert) => (
                            <div
                                key={alert.id}
                                className="mtc-card"
                                style={{
                                    display: "flex",
                                    overflow: "hidden",
                                    background: alert.read ? "white" : "#FFF8F8", // Highlight unread
                                    border: alert.read ? "none" : "1px solid #FFEBEE",
                                    position: "relative",
                                }}
                            >
                                {/* Status Indicator */}
                                <div
                                    style={{
                                        width: 5,
                                        background: alert.color,
                                    }}
                                />

                                <div style={{ padding: "16px", flex: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                        <span style={{
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: alert.color,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5
                                        }}>
                                            {alert.type}
                                        </span>
                                        <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
                                            {alert.date}
                                        </span>
                                    </div>

                                    <h3 style={{
                                        fontSize: 15,
                                        fontWeight: alert.read ? 600 : 700,
                                        color: "var(--text-primary)",
                                        marginBottom: 4
                                    }}>
                                        {alert.title}
                                    </h3>

                                    <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.4 }}>
                                        {alert.message}
                                    </p>
                                </div>

                                {/* Delete Button (Swipe Mock) */}
                                <button
                                    onClick={() => deleteAlert(alert.id)}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        padding: "0 12px",
                                        color: "#BDBDBD",
                                        cursor: "pointer",
                                        fontSize: 18,
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
