import Link from 'next/link'

import Image from '@/components/layout/image'
import AiQEntregaIcon from '@/components/icons/aiqentrega'
import BikeIcon from '@/components/icons/bike'
import StarIcon from '@/components/icons/star'
import {formatPrice} from '@/utils'

type CardRestaurantProps = {
  id: number
  name: string
  logo: string
  rating: number
  deliveryFee: number | null
  isOpen: boolean
}

export default function CardRestaurant({id, name, logo, rating, deliveryFee, isOpen}: CardRestaurantProps) {
  return (
    <Link href={`/restaurant/${id}`} className="block">
      <div className={`my-4 flex h-[72px] items-center rounded-lg bg-neutrals-100 transition-opacity ${isOpen ? '' : 'opacity-50'}`}>
        <div className="relative mr-3 h-full w-[72px] overflow-hidden rounded-lg">
          <Image src={logo} alt={`Logo do restaurante ${name}`} width={72} height={72} className="object-cover" />
        </div>

        <div className="flex-1 overflow-hidden">
          <h3 className="truncate text-base font-bold text-text-primary">{name}</h3>

          <div className="mt-1 flex items-center gap-2 text-sm">
            {deliveryFee === null ? (
              <div className="flex items-center gap-1">
                <BikeIcon />
                <span className="font-bold">grátis</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 font-bold text-primary">
                <AiQEntregaIcon />
                <span>R$ {formatPrice(deliveryFee)}</span>
              </div>
            )}

            <span>•</span>

            <div className="text-secondary flex items-center gap-1 font-bold">
              <StarIcon />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
