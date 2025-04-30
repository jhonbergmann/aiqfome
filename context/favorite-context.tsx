'use client'

import {createContext, useContext, useEffect, useState, ReactNode} from 'react'

import {Restaurant} from '@/lib/data'

type FavoritesContextType = {
  favorites: Restaurant[]
  toggleFavorite: (restaurant: Restaurant) => void
  isFavorite: (restaurantId: number) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({children}: {children: ReactNode}) {
  const [favorites, setFavorites] = useState<Restaurant[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favoriteRestaurants')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setFavorites(parsed)
      } catch {
        localStorage.removeItem('favoriteRestaurants')
      }
    }
  }, [])

  const toggleFavorite = (restaurant: Restaurant) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.id === restaurant.id)
      const newFavorites = isAlreadyFavorite ? prev.filter((fav) => fav.id !== restaurant.id) : [...prev, restaurant]

      localStorage.setItem('favoriteRestaurants', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const isFavorite = (restaurantId: number) => {
    return favorites.some((fav) => fav.id === restaurantId)
  }

  return <FavoritesContext.Provider value={{favorites, toggleFavorite, isFavorite}}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
