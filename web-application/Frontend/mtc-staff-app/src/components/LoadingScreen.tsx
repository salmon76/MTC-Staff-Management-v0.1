"use client";

import React from "react";

interface LoadingScreenProps {
    message?: string;
}

export default function LoadingScreen({
    message = "กำลังเชื่อมต่อ...",
}: LoadingScreenProps) {
    return (
        <div
            id="loading-screen"
            style={{
                minHeight: "100dvh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                background: "var(--background)",
            }}
        >
            {/* Logo Area */}
            <div
                style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--mtc-red), var(--mtc-red-dark))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-red)",
                    animation: "float 2s ease-in-out infinite",
                }}
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L2 12H5V20H19V12H22L12 2Z" fill="white" />
                    <rect x="10" y="14" width="4" height="6" rx="2" fill="rgba(198,40,40,0.8)" />
                </svg>
            </div>

            {/* Spinner */}
            <div className="mtc-spinner mtc-spinner-red" style={{ width: 32, height: 32 }} />

            {/* Message */}
            <p
                style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                }}
            >
                {message}
            </p>
        </div>
    );
}
