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
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      
          smootherRef.current = ScrollSmoother.create({
          smooth: 0.2,
          effects: true,
          smoothTouch: 0.3,
          ignoreMobileResize: true
        });

      // Remove all ScrollTrigger for now to isolate the issue
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
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