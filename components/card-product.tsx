import Link from 'next/link'

import type {Product} from '@/lib/data'
import {formatPrice} from '@/utils'

type CardProductProps = {
  product: Product
}

export default function CardProduct({product}: CardProductProps) {
  const {id, name, description, price} = product

  return (
    <article className="px-2">
      <Link href={`/product/${id}`} aria-label={`Ver detalhes do produto ${name}`} className="block px-4 py-2 transition hover:bg-gray-50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-medium text-text-primary">{name}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-gray-500">{description}</p>
          </div>
          <span className="shrink-0 font-bold text-primary">R$ {formatPrice(price)}</span>
        </div>
      </Link>
    </article>
  )
}
