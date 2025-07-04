import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

type HeroSectionProps = {
  locale?: 'en' | 'fr';
};

export default async function HeroSection({ locale = 'en' }: HeroSectionProps) {
  // Read the appropriate YAML file based on locale
  const fileName = locale === 'fr' ? '_homepage-fr.yml' : '_homepage.yml';
  const filePath = path.join(process.cwd(), fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as Record<string, any>;
  
  return (
    <>
      {/* Fixed Background Video */}
      <div className="fixed inset-0 w-full h-screen -z-10">
        <video 
          className="w-full h-full object-cover" 
          style={{ maxHeight: '100%' }}
          autoPlay
          loop
          muted
          preload="none"
          playsInline
        >
          <source src="/video/heroVideo.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>          
      </div>

      {/* Hero Section */}
      <main className="flex flex-col justify-end w-full h-[50vh] md:h-[30vh] text-viaOffWhite relative z-10 bg-viaDarkGreen">
        <div className="p-5 md:p-10 pt-20">
          <p className="text-2xl md:text-4xl mt-4 mb-2 w-full">{data.mainsubtitle}</p>
            <div className="flex flex-col justify-between md:flex-row md:items-end gap-4 mb-5 w-full">

              {/* <h1 className="text-6xl md:text-9xl font-bold mb-0 pb-0 w-full">{data.maintitle || 'No Title Found'}</h1> */}
              
              {/* Logo. It has a padding of 2 top and bottom for easier alignment */}
              <div className="py-2">
                <img src="/svg/ViaNationalLogo.svg" className="w-[500px] h-auto"/>
              </div>

              {/* This tagline splits itself into two lines on desktop and is one line on mobile */}
              <div className="text-xl md:text-4xl text-left mb-0 pb-0 leading-none">
                <span className="md:hidden">{data.tagline}</span>
                    <span className="hidden md:block">
                    <div className="whitespace-nowrap">{data.tagline.split(' ').slice(0, Math.ceil(data.tagline.split(' ').length / 2)).join(' ')}</div>
                    <div className="whitespace-nowrap">{data.tagline.split(' ').slice(Math.ceil(data.tagline.split(' ').length / 2)).join(' ')}</div>
                  </span>
              </div>
            </div>        
        </div>

      </main>
      <main>
      <div className="w-full h-screen bg-transparent flex-1">

      </div>        
      </main>

    </>
  );
}