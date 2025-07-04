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
    <nav className="fixed top-0 flex flex-row gap-4 justify-between items-center py-2 px-5 md:px-10 md:py-4 w-full bg-viaDarkGreen">
      <div className="flex justify-start items-center gap-4 text-viaOffWhite">
          <img src="/svg/ViaNationalLogo.svg" className="w-[150px] h-auto"/>
      </div>
      <div className="flex flex-row justify-end items-center gap-4 text-viaOffWhite">
        <div className="flex flex-row gap-4 invisible md:visible">
          <Link href={`/${currentLang}`}>{currentLang === 'fr' ? 'À PROPOS' : 'ABOUT'}</Link>
          <Link href={`/${currentLang}`}>{currentLang === 'fr' ? 'NOS MARQUES' : 'OUR BRANDS'}</Link>          
        </div>

        <LanguageSwitcher />
      </div>

    </nav>
  );
}