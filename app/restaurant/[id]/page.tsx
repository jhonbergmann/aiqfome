'use client'

import {use, useEffect, useRef} from 'react'
import {useRouter} from 'next/navigation'
import {AlertTriangle} from 'lucide-react'

import ShareIcon from '@/components/icons/share'
import HeartIcon from '@/components/icons/heart'
import HeartSolidIcon from '@/components/icons/heart-solid'
import BikeIcon from '@/components/icons/bike'
import StarIcon from '@/components/icons/star'
import Image from '@/components/layout/image'
import AccordionCategory from '@/components/accordion-category'
import Empty from '@/components/layout/empty'
import {useCart} from '@/context/cart-context'
import {useFavorites} from '@/context/favorite-context'
import {restaurants, categories, products} from '@/lib/data'
import {formatPrice} from '@/utils'

type RestaurantPageProps = {
  params: Promise<{id: string}>
}

export default function RestaurantPage({params}: RestaurantPageProps) {
  const {id} = use(params)
  const restaurantId = Number(id)
  const restaurant = restaurants.find((r) => r.id === restaurantId)

  const confirmRef = useRef(false)
  const router = useRouter()
  const {toggleFavorite, isFavorite} = useFavorites()
  const {restaurantId: cartRestaurantId, setRestaurantId, totalItems, clearCart} = useCart()

  useEffect(() => {
    if (!restaurant) return

    const isDifferentRestaurant = cartRestaurantId !== null && cartRestaurantId !== restaurantId
    const hasItemsInCart = totalItems > 0

    if (isDifferentRestaurant && hasItemsInCart && !confirmRef.current) {
      confirmRef.current = true
      const confirmReset = window.confirm('Você já tem itens de outro restaurante no carrinho. Deseja limpar o carrinho?')
      if (confirmReset) {
        clearCart()
        setRestaurantId(restaurantId)

        return
      }

      router.push(`/restaurant/${cartRestaurantId}`)
    } else if (totalItems === 0) setRestaurantId(restaurantId)
  }, [restaurantId, cartRestaurantId, totalItems, setRestaurantId, router, restaurant])

  if (!restaurant)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Empty
          icon={AlertTriangle}
          title="Restaurante não encontrado"
          description="Não conseguimos encontrar o restaurante que você está procurando."
          buttonLabel="Voltar para a página inicial"
          buttonHref="/"
        />
      </div>
    )

  const restaurantCategories = categories.filter((c) => c.restaurantId === restaurantId)

  return (
    <main className="pb-20">
      <header className="flex flex-col gap-2 p-4">
        <div className="flex items-center">
          <div className="relative mr-2 h-9 w-9 overflow-hidden rounded">
            <Image src={restaurant.logo} alt={`Logo do restaurante ${restaurant.name}`} className="object-cover" fill />
          </div>
          <h1 className="truncate text-xl font-extrabold text-text-primary">{restaurant.name}</h1>
        </div>

        <div className="mt-4 flex items-center">
          <button className="mr-4">
            <ShareIcon className="text-primary" />
          </button>
          <button onClick={() => toggleFavorite(restaurant)}>
            {isFavorite(restaurant.id) ? <HeartSolidIcon className="text-primary" /> : <HeartIcon className="text-primary" />}
          </button>
          <span className="ml-auto text-xs font-bold">
            mais infos <span className="ml-1">›</span>
          </span>
        </div>

        <div className="mt-2 flex items-center text-sm">
          <div className="mr-3 flex items-center gap-2 text-xs font-bold text-primary">
            <BikeIcon className="text-primary" />
            <span className="text-sm">R$ {formatPrice(restaurant.deliveryFee, '4,99')}</span>
            <span className="flex gap-2 text-text-medium">
              <span className="text-neutral-300">•</span>
              <span>{restaurant.deliveryTime}</span>
              <span className="text-neutral-300">•</span>
              <span>{restaurant.distance}</span>
            </span>
          </div>
        </div>

        <div className="mt-1 space-y-2 text-xs">
          <div className="w-fit rounded bg-neutrals-100 p-1 font-bold">entrega grátis acima de R$ {formatPrice(restaurant.freeDeliveryOver, '35,00')}</div>
          <div className="flex items-center gap-2 text-xs font-bold">
            <StarIcon className="w-3" />
            <span>{restaurant.rating} de 5</span>
            <span className="text-neutral-300">•</span>
            <span className="text-green-500">fecha às 20:00</span>
          </div>
          <div className="font-bold">pedido mínimo: R$ {formatPrice(restaurant.minOrder)}</div>
        </div>
      </header>

      <section>
        {restaurantCategories.map((category) => {
          const categoryProducts = products.filter((p) => p.categoryId === category.id && p.restaurantId === restaurantId)
          return <AccordionCategory key={category.id} category={category} products={categoryProducts} />
        })}
      </section>
    </main>
  )
}
