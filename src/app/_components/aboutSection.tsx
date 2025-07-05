"use client";
import { useRef } from "react";
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AboutSectionProps = {
  locale?: 'en' | 'fr';
  aboutTitle?: string;
  aboutSubtitle?: string;
  aboutDesc?: string;
};

export default function AboutSection({ 
  aboutTitle = "About Us",
  aboutSubtitle = "Our Story",
  aboutDesc = "Default description"
}: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Section About */}
      <div
        ref={containerRef}
        className="relative w-full h-screen z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/img/aboutBackground.png)" }}
      >
        {/* About Section */}
        <div className="w-full min-h-screen flex flex-col gap-5 md:gap-2 md:flex-row items-center justify-center p-5 md:p-10 bg-black/40">
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-4xl md:text-6xl font-bold text-viaOffWhite">
              {aboutTitle}
            </h1>
            <p className="text-viaOffWhite text-2xl">
              {aboutSubtitle}
            </p>
          </div>
          <p className="text-viaOffWhite w-1/2 md:w-[35%]">
            {aboutDesc}
          </p>
        </div>
      </div>
    </>
  );
}