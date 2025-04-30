'use client'

import {createContext, useContext, useEffect, useState} from 'react'
import type {ReactNode} from 'react'

export type CartItemOption = {
  name: string
  value: string
  price: number
}

export type CartItem = {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  options: CartItemOption[]
  observation?: string
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'id'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  restaurantId: number | null
  setRestaurantId: (id: number | null) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({children}: {children: ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([])
  const [restaurantId, setRestaurantId] = useState<number | null>(null)

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    const storedRestaurantId = localStorage.getItem('restaurantId')

    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch {
        localStorage.removeItem('cart')
      }
    }

    if (storedRestaurantId) {
      try {
        setRestaurantId(JSON.parse(storedRestaurantId))
      } catch {
        localStorage.removeItem('restaurantId')
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('restaurantId', JSON.stringify(restaurantId))
  }, [restaurantId])

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    setItems((prevItems) => {
      const newId = prevItems.length > 0 ? Math.max(...prevItems.map((item) => item.id)) + 1 : 1
      return [...prevItems, {...item, id: newId}]
    })
  }

  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? {...item, quantity} : item)))
  }

  const clearCart = () => {
    setItems([])
    setRestaurantId(null)
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = items.reduce((total, item) => {
    const itemTotal = item.price * item.quantity
    const optionsTotal = item.options.reduce((sum, option) => sum + option.price, 0) * item.quantity
    return total + itemTotal + optionsTotal
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        restaurantId,
        setRestaurantId,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) throw new Error('useCart must be used within a CartProvider')
  return context
}
