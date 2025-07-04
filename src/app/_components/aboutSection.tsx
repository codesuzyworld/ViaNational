import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

type AboutSectionProps = {
  locale?: 'en' | 'fr';
  aboutTitle?: string;
  aboutSubtitle?: string;
  aboutDesc?: string;
};

export default function AboutSection({ 
  locale = 'en',
  aboutTitle = "About Us",
  aboutSubtitle = "Our Story",
  aboutDesc = "Default description"
}: AboutSectionProps) {
  return (
    <>
      {/* Section About */}
      <div
        className="relative w-full h-screen z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/img/aboutBackground.png)" }}
      >
        <div className="w-full h-full flex flex-col gap-5 md:gap-2 md:flex-row items-center justify-center p-5 md:p-10 bg-black/40">
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