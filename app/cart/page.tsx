'use client'

import Link from 'next/link'
import {ShoppingBag} from 'lucide-react'

import Empty from '@/components/layout/empty'
import Image from '@/components/layout/image'
import CardCart from '@/components/card-cart'
import {useCart} from '@/context/cart-context'
import {restaurants} from '@/lib/data'
import {formatPrice} from '@/utils'

export default function CartPage() {
  const {items, totalPrice, clearCart, restaurantId} = useCart()
  const restaurant = restaurants.find((r) => r.id === restaurantId)

  const isEmpty = items.length === 0

  const deliveryFee = restaurant?.deliveryFee || 4.99
  const freeDeliveryOver = restaurant?.freeDeliveryOver || 35

  const shouldPayDelivery = totalPrice < freeDeliveryOver
  const finalDeliveryFee = shouldPayDelivery ? deliveryFee : 0
  const finalTotal = totalPrice + finalDeliveryFee

  if (isEmpty)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Empty icon={ShoppingBag} title="Seu carrinho está vazio" description="Adicione itens ao seu carrinho para continuar" buttonLabel="Explorar restaurantes" buttonHref="/" />
      </div>
    )

  return (
    <main className="pb-6">
      <>
        {restaurant && (
          <Link href={`/restaurant/${restaurant.id}`} className="block">
            <div className="px-4 pt-6">
              <div className="flex items-center">
                <div className="relative mr-3 h-10 w-10 overflow-hidden rounded">
                  <Image src={restaurant.logo} alt={restaurant.name} width={40} height={40} className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">seus itens em</h3>
                  <h2 className="font-bold text-text-primary">{restaurant.name}</h2>
                </div>
              </div>
            </div>
          </Link>
        )}

        <div className="p-4">
          {items.map((item) => (
            <CardCart key={item.id} item={item} />
          ))}
        </div>

        <div className="p-4">
          <div className="mb-2 flex justify-between">
            <span>subtotal</span>
            <span className="font-bold">R$ {formatPrice(totalPrice)}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span>taxa de entrega</span>
            <span className={shouldPayDelivery ? '' : 'text-accent'}>{shouldPayDelivery ? `R$ ${formatPrice(deliveryFee)}` : 'grátis'}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>total</span>
            <span className="text-primary">R$ {formatPrice(finalTotal)}</span>
          </div>

          <button onClick={clearCart} className="mt-4 w-full text-center text-gray-500 underline">
            limpar carrinho
          </button>

          <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row justify-between border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col">
              <span className="font-sm font-bold text-text-primary">subtotal</span>
              <span className="text-xl font-extrabold text-primary">R$ {formatPrice(finalTotal)}</span>
            </div>
            <button className="rounded-lg bg-primary px-6 py-4 font-bold text-white">ir para pagamento</button>
          </div>
        </div>
      </>
    </main>
  )
}
