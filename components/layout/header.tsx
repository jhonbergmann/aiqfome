'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'

import LocationIcon from '@/components/icons/location'
import UserIcon from '@/components/icons/user'
import ChevronRightIcon from '@/components/icons/chevron-right'
import SearchIcon from '@/components/icons/search'
import {useSearch} from '@/context/search-context'

type HeaderProps = {
  address?: string
}

export default function Header({address = 'Rua Mandaguari, 198'}: HeaderProps) {
  const {searchQuery, setSearchQuery} = useSearch()

  const pathname = usePathname()
  const isHome = pathname === '/'

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)

  return (
    <header className="sticky top-[-1px] z-10 min-w-[320px] bg-primary text-white">
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="p-1">
          <img src="/logo.png" alt="Logo" />
        </Link>

        <div className="mx-4 flex-1">
          <div className="flex items-center">
            <LocationIcon className="mr-4" />
            <div className="text-sm">
              <div className="text-sm opacity-80">entregando em</div>
              <div className="flex items-center">
                <span className="text-base">{address}</span> <ChevronRightIcon className="ml-2" />
              </div>
            </div>
          </div>
        </div>

        <UserIcon />
      </div>

      {isHome && (
        <div className="mb-4 px-4">
          <div className="flex items-center rounded-[8px] bg-white px-4">
            <SearchIcon className="mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="busque pela loja ou culinária"
              className="h-[40px] w-full border-none bg-transparent text-sm font-semibold text-gray-800 outline-none"
            />
          </div>
        </div>
      )}
    </header>
  )
}
