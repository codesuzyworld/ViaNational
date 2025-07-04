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
    <main className="p-10">
      <h1 className="text-4xl font-bold">{data.maintitle || 'No Title Found'}</h1>
      <p className="text-xl mt-4">{data.mainsubtitle}</p>
      <p className="text-lg mt-2">{data.tagline}</p>
    </main>
  );
}