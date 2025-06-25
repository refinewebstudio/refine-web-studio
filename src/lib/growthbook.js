// lib/growthbook.js - GrowthBook configuration
import { GrowthBook } from "@growthbook/growthbook-react";

// Initialize GrowthBook instance
export const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
  enableDevMode: process.env.NODE_ENV === "development",
  trackingCallback: (experiment, result) => {
    // Track experiment views in GA4 or your analytics
    if (typeof gtag !== "undefined") {
      gtag("event", "experiment_viewed", {
        experiment_id: experiment.key,
        variation_id: result.variationId,
      });
    }

    // Also track in Microsoft Clarity if available
    if (typeof clarity !== "undefined") {
      clarity("set", `experiment_${experiment.key}`, result.variationId);
    }
  },
});

// Set user attributes (optional)
export const setGrowthBookAttributes = (attributes) => {
  growthbook.setAttributes({
    // User attributes for targeting
    userId: attributes.userId,
    email: attributes.email,
    plan: attributes.plan,
    // Device/browser info
    deviceType:
      typeof window !== "undefined"
        ? window.innerWidth < 768
          ? "mobile"
          : "desktop"
        : "unknown",
    // Any custom attributes
    ...attributes,
  });
};

// Load features from GrowthBook API (updated method)
export const initializeGrowthBook = async () => {
  try {
    await growthbook.init({ timeout: 1000 });
  } catch (error) {
    console.warn("Failed to initialize GrowthBook:", error);
  }
};
