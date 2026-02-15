"use client";

import React, { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { EVENTS_DATA, MASTER_DATA } from "@/data/events";
import { EventTask } from "@/types";

export default function EventsPage() {
    const [viewMode, setViewMode] = useState<"Day" | "Week" | "Month">("Month");
    const [activeTab, setActiveTab] = useState<"Calendar" | "MyTasks">("Calendar");
    const [showAddTask, setShowAddTask] = useState(false);

    // Mock form state
    const [newTask, setNewTask] = useState({
        title: "",
        category: "",
        priority: "medium",
        location: "", // assign default if needed
        assignee: "user_1",
        date: new Date().toISOString().split('T')[0],
        time: "09:00",
    });

    // Mock Filtering Logic
    const filteredEvents = EVENTS_DATA.filter((event) => {
        if (activeTab === "MyTasks" && event.type !== "Task") return false;
        if (viewMode === "Day" && event.date !== "2026-06-12") return false;
        if (viewMode === "Week" && (event.date < "2026-06-12" || event.date > "2026-06-18")) return false;
        return true;
    });

    const handleSaveTask = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Simulate Saving Task:\nTitle: ${newTask.title}\nCategory: ${newTask.category}\nPriority: ${newTask.priority}`);
        setShowAddTask(false);
    };

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

                {/* Tab Switcher */}
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
                            {tab === "MyTasks" ? "Assignments" : "Calendar"}
                        </button>
                    ))}
                </div>

                {/* View Mode Switcher */}
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
                                <div style={{ width: 6, background: event.color, flexShrink: 0 }} />
                                <div style={{ padding: "16px", flex: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                                        <span style={{ fontSize: 12, fontWeight: 700, color: event.color || "gray", textTransform: "uppercase", letterSpacing: 0.5 }}>
                                            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })} • {event.time.split('-')[0]}
                                        </span>
                                        {event.type === "Task" && (
                                            <span style={{
                                                fontSize: 10, padding: "2px 8px", borderRadius: 10,
                                                background: event.status === "done" ? "#E8F5E9" : "#FFF3E0",
                                                color: event.status === "done" ? "#2E7D32" : "#EF6C00", fontWeight: 600,
                                            }}>
                                                {event.status === "done" ? "DONE" : "PENDING"}
                                            </span>
                                        )}
                                    </div>
                                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#212121", marginBottom: 4 }}>{event.title}</h3>
                                    <p style={{ fontSize: 13, color: "#757575", display: "flex", alignItems: "center", gap: 6 }}>
                                        {event.type === "Task" ? "👤 Assigned to Me" : `📍 ${event.location || 'N/A'}`}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Add Task Button */}
            <button
                onClick={() => setShowAddTask(true)}
                style={{
                    position: "fixed",
                    bottom: 90,
                    right: 20,
                    height: 56,
                    padding: "0 24px 0 20px",
                    borderRadius: 30,
                    background: "var(--mtc-red)",
                    color: "white",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(198, 40, 40, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    zIndex: 90,
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 15,
                    transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Task
            </button>

            {/* Add Task Modal */}
            {showAddTask && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200,
                    background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
                    display: "flex", alignItems: "flex-end",
                    justifyContent: "center",
                }}>
                    <div
                        className="animate-fade-in-up"
                        style={{
                            width: "100%", maxWidth: 600,
                            background: "white",
                            borderRadius: "20px 20px 0 0",
                            padding: "24px 24px 40px 24px",
                            maxHeight: "90vh",
                            overflowY: "auto",
                            boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
                        }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                            <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>Create New Task</h2>
                            <button
                                onClick={() => setShowAddTask(false)}
                                style={{ border: "none", background: "none", fontSize: 24, color: "#BDBDBD", cursor: "pointer" }}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSaveTask} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {/* Title */}
                            <div>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Title</label>
                                <input
                                    type="text"
                                    placeholder="What needs to be done?"
                                    value={newTask.title}
                                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                    style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid var(--border-light)", fontSize: 15 }}
                                    required
                                />
                            </div>

                            {/* Date & Time Row */}
                            <div style={{ display: "flex", gap: 12 }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Date</label>
                                    <input
                                        type="date"
                                        value={newTask.date}
                                        onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                                        style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid var(--border-light)", fontSize: 15 }}
                                    />
                                </div>
                                <div style={{ width: 120 }}>
                                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Time</label>
                                    <input
                                        type="time"
                                        value={newTask.time}
                                        onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                                        style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid var(--border-light)", fontSize: 15 }}
                                    />
                                </div>
                            </div>

                            {/* Master Data Dropdown: Category */}
                            <div>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Category</label>
                                <select
                                    value={newTask.category}
                                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                                    style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid var(--border-light)", fontSize: 15, background: "white", WebkitAppearance: "none" }}
                                >
                                    <option value="">Select Category</option>
                                    {MASTER_DATA.categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Master Data Dropdown: Priority & Assignee */}
                            <div style={{ display: "flex", gap: 12 }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Priority</label>
                                    <select
                                        value={newTask.priority}
                                        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                                        style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid var(--border-light)", fontSize: 15, background: "white" }}
                                    >
                                        {MASTER_DATA.priorities.map(p => (
                                            <option key={p.id} value={p.value} label={p.label}>{p.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Assign To</label>
                                    <select
                                        value={newTask.assignee}
                                        onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                                        style={{ width: "100%", padding: "12px", borderRadius: 8, border: "1px solid var(--border-light)", fontSize: 15, background: "white" }}
                                    >
                                        {MASTER_DATA.assignees.map(u => (
                                            <option key={u.id} value={u.id}>{u.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div style={{ marginTop: 24 }}>
                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        padding: "14px",
                                        background: "var(--mtc-red)",
                                        color: "white",
                                        fontSize: 16,
                                        fontWeight: 700,
                                        borderRadius: 12,
                                        border: "none",
                                        cursor: "pointer",
                                        boxShadow: "0 4px 12px rgba(198, 40, 40, 0.3)",
                                    }}
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <BottomNav />
        </div>
    );
}
