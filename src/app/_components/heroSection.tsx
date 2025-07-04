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
    <main className="flex flex-col justify-center w-full md:p-10  text-viaOffWhite">
      <p className="text-2xl md:text-4xl mt-4 mb-2 w-full">{data.mainsubtitle}</p>
        <div className="flex flex-col justify-between md:flex-row md:items-end gap-4 w-full">

        {/* <h1 className="text-6xl md:text-9xl font-bold mb-0 pb-0 w-full">{data.maintitle || 'No Title Found'}</h1> */}
          
        {/* Logo. It has a padding of 2 top and bottom for easier alignment */}
          <div className="py-2">
            <img src="/svg/ViaNationalLogo.svg" className="w-[500px] h-auto"/>
          </div>

        {/* This tagline splits itself into two lines on desktop and is one line on mobile */}
          <div className="text-xl md:text-4xl text-left mb-0 pb-0 leading-none">
            <span className="md:hidden">{data.tagline}</span>
            <span className="hidden md:block">
              <div>{data.tagline.split(' ').slice(0, 3).join(' ')}</div>
              <div>{data.tagline.split(' ').slice(3).join(' ')}</div>
            </span>
          </div>
        </div>
      </main>
  );
}