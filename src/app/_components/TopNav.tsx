'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function TopNav() {
  const pathname = usePathname();
  
  // Detect current language from pathname
  const isFrench = pathname.startsWith('/fr');
  const currentLang = isFrench ? 'fr' : 'en';
  
  return (
    <nav className="flex flex-row gap-4 justify-between items-center p-4 md:p-10 w-full ">
      <div className="flex justify-start items-center gap-4 text-viaOffWhite">
          <img src="/svg/ViaNationalLogo.svg" className="w-[150px] h-auto"/>
      </div>
      <div className="flex flex-row justify-end items-end gap-4 text-viaOffWhite">
        <div className="flex flex-row gap-4 invisible md:visible">
          <Link href={`/${currentLang}`}>ABOUT</Link>
          <Link href={`/${currentLang}`}>OUR BRANDS</Link>          
        </div>

        <LanguageSwitcher />
      </div>

    </nav>
  );
}