"use client";
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AboutSectionProps = {
  locale?: 'en' | 'fr';
  aboutTitle?: string;
  aboutSubtitle?: string;
  aboutDesc?: string;
  valueTitle?: string;
  valueSubtitle?: string;
  valueDesc?: string;
};

export default function AboutSection({ 
  locale = 'en',
  aboutTitle = "About Us",
  aboutSubtitle = "Our Story",
  aboutDesc = "Default description",
  valueTitle = "Our Values",
  valueSubtitle = "What We Believe",
  valueDesc = "Default description"
}: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Section About */}
      <div
        className="relative w-full h-screen z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/img/aboutBackground.png)" }}
      >
        {/* Scrollable Container */}
        <div className="w-full h-full overflow-y-auto hide-scrollbar">
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

          {/* Values Section */}
          <div className="w-full min-h-screen flex flex-col gap-5 md:gap-2 md:flex-row items-center justify-center p-5 md:p-10 bg-black/40">
            <div className="w-1/2 flex flex-col gap-2">
              <h1 className="text-4xl md:text-6xl font-bold text-viaOffWhite">
                {valueTitle}
              </h1>
              <p className="text-viaOffWhite text-2xl">
                {valueSubtitle}
              </p>
            </div>
            
            <p className="text-viaOffWhite w-1/2 md:w-[35%]">
              {valueDesc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}