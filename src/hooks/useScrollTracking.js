// hooks/useScrollTracking.js
"use client";
import { useEffect } from "react";
import { trackScrollDepth } from "../lib/analytics";

export const useScrollTracking = () => {
  useEffect(() => {
    let ticking = false;
    const scrollDepthMarks = [25, 50, 75, 100];
    const triggered = new Set();

    const updateScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      scrollDepthMarks.forEach((mark) => {
        if (scrollPercent >= mark && !triggered.has(mark)) {
          triggered.add(mark);
          trackScrollDepth(mark);
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};
