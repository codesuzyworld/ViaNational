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
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isFrench ? 'EN' : 'FR'}
      </Link>
    </div>
  )
}