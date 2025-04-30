import Link from 'next/link'

import Image from '@/components/layout/image'

type CardFavoritesProps = {
  id: number
  name: string
  logo: string
  rating: number
  deliveryFee: number | null
  isOpen: boolean
}

export default function CardFavorites({id, name, logo, isOpen}: CardFavoritesProps) {
  return (
    <Link href={`/restaurant/${id}`} className="block w-[180px] flex-shrink-0">
      <div className={`flex h-[72px] items-center rounded-lg bg-neutrals-100 transition-opacity ${isOpen ? '' : 'opacity-50'}`}>
        <div className="relative mr-3 h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-lg">
          <Image src={logo} alt={`Logo do restaurante ${name}`} fill className="object-cover" />
        </div>
        <span className="truncate text-sm font-bold text-text-primary">{name}</span>
      </div>
    </Link>
  )
}
