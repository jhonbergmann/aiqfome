'use client'

import Link from 'next/link'

import {useCart} from '@/context/cart-context'

export default function Ticket() {
  const {totalItems} = useCart()

  return (
    totalItems > 0 && (
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-transparent p-4">
        <div className="mx-auto">
          <Link href="/cart">
            <button className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3">
              <span className="font-bold text-white">ver ticket</span>
            </button>
          </Link>
        </div>
      </footer>
    )
  )
}
