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
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href={`/${currentLang}`}>Home</Link>
        <Link href={`/${currentLang}/about`}>About</Link>
      </div>
      <LanguageSwitcher />
    </nav>
  );
}