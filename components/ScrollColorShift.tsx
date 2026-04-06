"use client";
import { useEffect } from "react";

/**
 * ScrollColorShift — Cinematic Module 09 (adapted)
 *
 * Reads [data-shift-bg] attributes from section elements on the page
 * and smoothly transitions the page background as each section enters view.
 *
 * Usage: place <ScrollColorShift /> anywhere in the client tree.
 * Tag sections with: data-shift-bg="#FAF7F2"
 */
export function ScrollColorShift() {
  useEffect(() => {
    const triggers: { kill: () => void }[] = [];

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll<HTMLElement>("[data-shift-bg]");

      sections.forEach((section) => {
        const bg = section.dataset.shiftBg;
        if (!bg) return;

        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () =>
              gsap.to("body", { backgroundColor: bg, duration: 0.9, ease: "power2.inOut" }),
            onEnterBack: () =>
              gsap.to("body", { backgroundColor: bg, duration: 0.9, ease: "power2.inOut" }),
          })
        );
      });
    };

    init();
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return null;
}
