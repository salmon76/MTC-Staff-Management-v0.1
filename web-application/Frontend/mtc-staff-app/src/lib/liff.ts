/**
 * LIFF (LINE Front-end Framework) Utility Module
 *
 * This module provides helper functions for working with LINE LIFF.
 * In development mode, it returns mock data so you can work without LINE.
 */

// LIFF Profile type
export interface LIFFProfile {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
}

// Mock profile for development
const MOCK_PROFILE: LIFFProfile = {
    userId: "U_dev_mock_user_001",
    displayName: "Dev User (Mock)",
    pictureUrl: undefined,
    statusMessage: "Development mode",
};

/**
 * Initialize LIFF
 * Returns true if LIFF is initialized and user is logged in
 */
export async function initializeLiff(liffId: string): Promise<boolean> {
    // In development, return mock success
    if (process.env.NODE_ENV === "development" && !liffId) {
        console.log("[LIFF] Development mode - using mock LIFF");
        return true;
    }

    try {
        const liff = (await import("@line/liff")).default;
        await liff.init({ liffId });

        if (!liff.isLoggedIn()) {
            liff.login();
            return false;
        }

        return true;
    } catch (error) {
        console.error("[LIFF] Initialization failed:", error);
        return false;
    }
}

/**
 * Get LINE user profile
 */
export async function getLiffProfile(): Promise<LIFFProfile | null> {
    // In development, return mock profile
    if (process.env.NODE_ENV === "development") {
        console.log("[LIFF] Development mode - returning mock profile");
        return MOCK_PROFILE;
    }

    try {
        const liff = (await import("@line/liff")).default;
        const profile = await liff.getProfile();
        return {
            userId: profile.userId,
            displayName: profile.displayName,
            pictureUrl: profile.pictureUrl,
            statusMessage: profile.statusMessage,
        };
    } catch (error) {
        console.error("[LIFF] Failed to get profile:", error);
        return null;
    }
}

/**
 * Get LINE user ID
 */
export async function getLineUserId(): Promise<string | null> {
    const profile = await getLiffProfile();
    return profile?.userId ?? null;
}

/**
 * Check if running in LINE app
 */
export async function isInLineApp(): Promise<boolean> {
    if (process.env.NODE_ENV === "development") {
        return false;
    }

    try {
        const liff = (await import("@line/liff")).default;
        return liff.isInClient();
    } catch {
        return false;
    }
}

/**
 * Close LIFF window
 */
export async function closeLiff(): Promise<void> {
    try {
        const liff = (await import("@line/liff")).default;
        if (liff.isInClient()) {
            liff.closeWindow();
        }
    } catch (error) {
        console.error("[LIFF] Failed to close:", error);
    }
}
