'use client'

import {Edit2, Minus, Plus, Trash2} from 'lucide-react'
import Link from 'next/link'

import {useCart, type CartItem} from '@/context/cart-context'
import {formatPrice} from '@/utils'

type CardCartProps = {
  item: CartItem
}

export default function CardCart({item}: CardCartProps) {
  const {updateQuantity} = useCart()

  const handleDecrease = () => updateQuantity(item.id, item.quantity - 1)
  const handleIncrease = () => updateQuantity(item.id, item.quantity + 1)

  const totalItemPrice = () => {
    const basePrice = item.price * item.quantity
    const optionsPrice = item.options.reduce((sum, option) => sum + option.price, 0) * item.quantity
    return basePrice + optionsPrice
  }

  return (
    <div className="border-b-4 border-gray-100 py-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-text-primary">{item.name}</h3>
            <div className="font-bold text-primary">R$ {formatPrice(totalItemPrice())}</div>
          </div>

          <div className="mt-3 flex w-full items-center justify-end gap-2">
            <Link href={`/product/${item.productId}?edit=${item.id}`}>
              <button className="flex items-center text-sm font-bold">
                <Edit2 size={16} className="mr-1" /> editar
              </button>
            </Link>

            <div className="flex items-center">
              <div className="ml-2 flex items-center overflow-hidden">
                <button onClick={handleDecrease} className="flex h-8 w-8 items-center justify-center rounded-full border">
                  {item.quantity > 1 ? <Minus size={16} /> : <Trash2 size={16} />}
                </button>
                <span className="px-6 text-center font-bold text-text-primary">{item.quantity}</span>
                <button onClick={handleIncrease} className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {item.options.length > 0 && (
            <div className="mt-2">
              {item.options.map((option, index) => (
                <div key={index} className="flex text-sm text-gray-600">
                  <span className="mr-1">•</span>
                  <span className="flex flex-col">
                    <span className="flex flex-col">
                      <span className="font-bold">{option.name}</span> <span>{option.value}</span>
                    </span>
                    {option.price > 0 && <span>+R$ {formatPrice(option.price)}</span>}
                  </span>
                </div>
              ))}
            </div>
          )}

          {item.observation && (
            <div className="mt-1 rounded-md bg-neutrals-100 p-2 text-sm text-gray-600">
              <span className="font-bold text-text-primary">observação:</span> {item.observation}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
