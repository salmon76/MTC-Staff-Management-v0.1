import React from "react";

interface LogoProps {
    size?: number;
    className?: string;
}

export default function MTCLogo({ size = 80, className = "" }: LogoProps) {
    return (
        <div
            className={className}
            style={{ width: size, height: size }}
            aria-label="Maitrichit Church Logo"
        >
            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
            >
                {/* Church Roof / Triangle */}
                <polygon
                    points="100,20 40,120 160,120"
                    fill="#C62828"
                    opacity="0.9"
                />
                {/* Second layer */}
                <polygon
                    points="100,50 55,120 145,120"
                    fill="#E53935"
                    opacity="0.7"
                />
                {/* Cross */}
                <rect x="95" y="8" width="10" height="60" rx="2" fill="#1A1A2E" />
                <rect x="80" y="22" width="40" height="10" rx="2" fill="#1A1A2E" />
                {/* Church Body */}
                <rect x="55" y="120" width="90" height="60" rx="4" fill="#C62828" />
                {/* Door (arch top) */}
                <path d="M85 160 Q85 145 100 145 Q115 145 115 160 L115 180 L85 180 Z" fill="#8E0000" />
                {/* Windows */}
                <circle cx="75" cy="140" r="8" fill="#FFCDD2" opacity="0.8" />
                <circle cx="125" cy="140" r="8" fill="#FFCDD2" opacity="0.8" />
                {/* Base */}
                <rect x="40" y="175" width="120" height="10" rx="3" fill="#8E0000" />
            </svg>
        </div>
    );
}
