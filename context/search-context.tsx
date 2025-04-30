'use client'

import {createContext, useContext, useState, ReactNode} from 'react'

import {restaurants as allRestaurants} from '@/lib/data'

type Restaurant = (typeof allRestaurants)[number]

type SearchContextType = {
  searchQuery: string
  setSearchQuery: (query: string) => void
  filteredRestaurants: Restaurant[]
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({children}: {children: ReactNode}) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRestaurants = allRestaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return <SearchContext.Provider value={{searchQuery, setSearchQuery, filteredRestaurants}}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearch must be used within a SearchProvider')
  return context
}
