'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isFrench = pathname.includes('/fr')
  
  const toggleLanguage = () => {
    if (isFrench) {
      return pathname.replace('/fr', '')
    } else {
      return `/fr${pathname}`
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href={toggleLanguage()}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isFrench ? 'EN' : 'FR'}
      </Link>
    </div>
  )
}