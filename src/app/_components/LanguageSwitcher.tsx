'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isFrench = pathname.startsWith('/fr')
  const isEnglish = pathname.startsWith('/en')
  
  const getOtherLanguagePath = () => {
    if (isFrench) {
      // Switch from French to English
      return pathname.replace('/fr', '/en')
    } else if (isEnglish) {
      // Switch from English to French
      return pathname.replace('/en', '/fr')
    } else {
      // If no language prefix, default to English
      return `/en${pathname}`
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={getOtherLanguagePath()}
        className="px-3 py-1 text-sm border border-viaOffWhite text-viaOffWhite rounded hover:bg-viaOffWhite hover:text-viaDarkGreen transition-colors"
      >
        {isFrench ? 'EN' : 'FR'}
      </Link>
    </div>
  )
}