'use client'

import {useState} from 'react'
import {ChevronDown, ChevronUp} from 'lucide-react'

import type {Category, Product} from '@/lib/data'
import CardProduct from '@/components/card-product'

type AccordionCategoryProps = {
  category: Category
  products: Product[]
}

export default function AccordionCategory({category, products}: AccordionCategoryProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => setIsOpen(!isOpen)

  return (
    <div className="flex flex-col border-b-4 border-gray-100">
      <div className="flex w-full flex-row justify-between p-4" onClick={toggleAccordion}>
        <div className="flex cursor-pointer flex-col gap-2">
          <div className="flex items-center">
            <h3 className="font-bold text-text-primary">{category.name}</h3>
            {category.hasPromotion && <span className="bg-accent ml-2 flex h-5 w-5 items-center justify-center rounded-full px-1 text-xs text-white">$</span>}
          </div>

          {category.description && <div className="text-xs text-gray-500">{category.description}</div>}
        </div>

        <button className="px-2">{isOpen ? <ChevronUp size={25} /> : <ChevronDown size={25} />}</button>
      </div>

      {isOpen && (
        <div>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
