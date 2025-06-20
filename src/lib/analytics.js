// lib/analytics.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

// Google Analytics 4 functions
export const gtag = (...args) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
};

export const pageview = (url) => {
  gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ name, category, label, value }) => {
  gtag("event", name, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Custom events for your business
export const trackFormSubmission = (formType) => {
  event({
    name: "form_submit",
    category: "engagement",
    label: formType,
  });
};

export const trackCTAClick = (ctaLocation, ctaText) => {
  event({
    name: "cta_click",
    category: "engagement",
    label: `${ctaLocation}_${ctaText}`,
  });
};

export const trackServiceView = (serviceName) => {
  event({
    name: "service_view",
    category: "content",
    label: serviceName,
  });
};

export const trackCaseStudyView = (caseStudyTitle) => {
  event({
    name: "case_study_view",
    category: "content",
    label: caseStudyTitle,
  });
};

export const trackScrollDepth = (percentage) => {
  event({
    name: "scroll",
    category: "engagement",
    label: `${percentage}%`,
    value: percentage,
  });
};

// Microsoft Clarity functions
export const clarityIdentify = (userId) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("identify", userId);
  }
};

export const claritySet = (key, value) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", key, value);
  }
};

export const clarityEvent = (eventName) => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", eventName);
  }
};
