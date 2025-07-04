"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

type GSAPWrapperProps = {
  children: React.ReactNode;
};

export default function GSAPWrapper({ children }: GSAPWrapperProps) {
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on client
      gsap.registerPlugin(ScrollTrigger);

      let iteration = 0;
      const time = 0.7; // Lower = faster scrolling
      const sections = gsap.utils.toArray(".snap");
      const totalDuration = sections.length;
      const spacing = 1;
      const snap = gsap.utils.snap(spacing);

      // Create timeline animation
      const animation = gsap
        .timeline({
          paused: true,
          defaults: { ease: "none" }
        })
        .to("#smooth-content", {
          yPercent: -100,
          duration: totalDuration,
          immediateRender: false
        });

      // Create scrub animation
      const scrub = gsap.to(animation, {
        totalTime: 0,
        duration: time,
        ease: "power2",
        paused: true
      });

      // Create ScrollTrigger
      ScrollTrigger.create({
        trigger: "#smooth-content",
        start: "top top",
        pin: "#smooth-content",
        onUpdate: (self) => {
          scrub.vars.totalTime = snap(
            (iteration + self.progress) * animation.duration()
          );
          scrub.invalidate().restart();
        }
      });
    }

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="relative">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
} 