import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../../lib/api";
import { TopNav } from "@/app/_components/TopNav";
import HeroSection from "@/app/_components/heroSection";
import AboutSection from "@/app/_components/aboutSection";
import GSAPWrapper from "@/app/_components/GSAPWrapper";
import ValueSection from "@/app/_components/valueSection";
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';


export default function Index() {
  const allPosts = getAllPosts();
  
  // Read the YAML data
  const fileName = '_homepage-fr.yml';
  const filePath = path.join(process.cwd(), fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as Record<string, any>;

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <nav id="topnav" className="fixed top-0 z-50 bg-viaDarkGreen w-full">
        <TopNav />
      </nav>
      <GSAPWrapper>
        <div id="herosection" className="snap w-full h-screen">
          <HeroSection locale="fr" />
        </div>
        <div id="aboutsection" className="snap w-full h-screen">
          <AboutSection 
            locale="fr" 
            aboutTitle={data.aboutTitle}
            aboutSubtitle={data.aboutSubtitle}
            aboutDesc={data.aboutDesc}
          />
        </div>
        <div id="valueSection" className="snap w-full h-screen">
          <ValueSection 
            locale="fr" 
            valueTitle={data.valueTitle}
            valueSubtitle={data.valueSubtitle}
            valueDesc={data.valueDesc}
          />
        </div>
      </GSAPWrapper>
    </>
  );
}
