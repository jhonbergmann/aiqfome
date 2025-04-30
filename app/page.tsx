'use client'

import {Store} from 'lucide-react'

import CardFavorites from '@/components/card-favorites'
import CardRestaurant from '@/components/card-restaurant'
import Banner from '@/components/layout/banner'
import Empty from '@/components/layout/empty'
import {useSearch} from '@/context/search-context'
import {useFavorites} from '@/context/favorite-context'

const banners = [
  {id: '1', src: '/images/banners/promotion-01.png', alt: 'Children Day Promotion'},
  {id: '2', src: '/images/banners/promotion-02.png', alt: 'Children Day Promotion'},
  {id: '3', src: '/images/banners/promotion-03.png', alt: 'Children Day Promotion'},
]

export default function Home() {
  const {filteredRestaurants} = useSearch()
  const {favorites} = useFavorites()

  const openRestaurants = filteredRestaurants.filter((r) => r.isOpen)
  const closedRestaurants = filteredRestaurants.filter((r) => !r.isOpen)
  const hasRestaurants = openRestaurants.length || closedRestaurants.length

  return (
    <main>
      <Banner banners={banners} />

      <div className="px-4 pb-3 pt-6">
        <section>
          {!!favorites.length && (
            <>
              <h2 className="text-xl font-extrabold text-primary">favoritos</h2>

              <div className="mt-2 overflow-x-auto">
                <div className="flex gap-4 pr-4 pb-2">
                  {favorites.map((restaurant) => (
                    <CardFavorites key={restaurant.id} {...restaurant} />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        <section>
          {!!openRestaurants.length && (
            <>
              <h2 className="text-xl font-extrabold text-primary">abertos</h2>

              {openRestaurants.map((restaurant) => (
                <CardRestaurant key={restaurant.id} {...restaurant} />
              ))}
            </>
          )}
        </section>

        <section className="mt-3">
          {!!closedRestaurants.length && (
            <>
              <h2 className="text-xl font-extrabold text-primary">fechados</h2>

              {closedRestaurants.map((restaurant) => (
                <CardRestaurant key={restaurant.id} {...restaurant} />
              ))}
            </>
          )}
        </section>

        <div>{!hasRestaurants && <Empty icon={Store} title="Nenhuma loja encontrada" description="Confere os termos buscados ou filtros selecionados e tente novamente" />}</div>
      </div>
    </main>
  )
}
