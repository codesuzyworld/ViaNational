'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isFrench = pathname.startsWith('/fr')
  
  const getOtherLanguagePath = () => {
    if (isFrench) {
      // Remove /fr prefix to get English path
      return pathname.replace('/fr', '') || '/'
    } else {
      // Add /fr prefix to get French path
      return `/fr${pathname}`
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