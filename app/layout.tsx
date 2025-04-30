import type React from 'react'
import type {Metadata} from 'next'
import {Nunito} from 'next/font/google'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Ticket from '@/components/layout/ticket'

import {CartProvider} from '@/context/cart-context'
import {SearchProvider} from '@/context/search-context'
import {FavoritesProvider} from '@/context/favorite-context'

import '../styles/globals.css'

const nunito = Nunito({subsets: ['latin'], weight: ['400', '600', '700', '800']})

export const metadata: Metadata = {
  title: 'aiqfome - Delivery de Comida',
  description: 'Peça comida online com o aiqfome',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} flex min-h-screen min-w-[320px] flex-col`}>
        <CartProvider>
          <SearchProvider>
            <FavoritesProvider>
              <Header />
              <main className="w-full flex-1">
                <div className="mx-auto w-full max-w-[1200px]">{children}</div>
              </main>
              <Footer />
              <Ticket />
            </FavoritesProvider>
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  )
}
