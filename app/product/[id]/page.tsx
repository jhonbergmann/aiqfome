'use client'

import {useState, useEffect, use} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import {Trash2, Plus, Minus, AlertTriangle} from 'lucide-react'

import Empty from '@/components/layout/empty'
import Image from '@/components/layout/image'
import {useCart, type CartItem, type CartItemOption} from '@/context/cart-context'
import {products} from '@/lib/data'
import {formatPrice} from '@/utils'

export default function ProductPage({params}: {params: Promise<{id: string}>}) {
  const {id} = use(params)

  const router = useRouter()
  const searchParams = useSearchParams()
  const {items, addToCart, removeFromCart} = useCart()
  const editItemId = searchParams.get('edit') ? Number.parseInt(searchParams.get('edit')!) : null

  const productId = Number.parseInt(id)
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, CartItemOption[]>>({})
  const [observation, setObservation] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editingItem, setEditingItem] = useState<CartItem | null>(null)

  useEffect(() => {
    if (editItemId) {
      const item = items.find((i) => i.id === editItemId)
      if (item) {
        setIsEditing(true)
        setEditingItem(item)
        setQuantity(item.quantity)

        const groupedOptions: Record<string, CartItemOption[]> = {}
        item.options.forEach((option) => {
          if (!groupedOptions[option.name]) {
            groupedOptions[option.name] = []
          }
          groupedOptions[option.name].push(option)
        })

        setSelectedOptions(groupedOptions)
        setObservation(item.observation || '')
      }
    } else if (product?.options) {
      const defaultSelections: Record<string, CartItemOption[]> = {}

      product.options.forEach((option) => {
        const defaultItems = option.items.filter((item) => item.default)

        if (defaultItems.length > 0) {
          defaultSelections[option.name] = defaultItems.map((item) => ({
            name: option.name,
            value: item.name,
            price: item.price || 0,
          }))
        }
      })

      setSelectedOptions(defaultSelections)
    }
  }, [editItemId, items, product])

  if (!product)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Empty
          icon={AlertTriangle}
          title="Produto não encontrado"
          description="O produto que você está procurando não está disponível."
          buttonLabel="Voltar para a página inicial"
          buttonHref="/"
        />
      </div>
    )

  const handleOptionSelect = (optionName: string, itemName: string, itemPrice: number, multiSelect: boolean, maxSelect?: number, isRequired?: boolean) => {
    setSelectedOptions((prev) => {
      const newOptions = {...prev}
      const currentSelections = newOptions[optionName] || []

      const existingIndex = currentSelections.findIndex((o) => o.value === itemName)

      if (existingIndex >= 0) {
        if (!isRequired || currentSelections.length > 1) {
          newOptions[optionName] = currentSelections.filter((o) => o.value !== itemName)
        }
      } else {
        if (multiSelect) {
          if (maxSelect && currentSelections.length >= maxSelect) {
            return prev
          }

          newOptions[optionName] = [...currentSelections, {name: optionName, value: itemName, price: itemPrice || 0}]
        } else {
          newOptions[optionName] = [{name: optionName, value: itemName, price: itemPrice || 0}]
        }
      }

      return newOptions
    })
  }

  const isOptionSelected = (optionName: string, itemName: string) => {
    return selectedOptions[optionName]?.some((o) => o.value === itemName) || false
  }

  const calculateTotalPrice = () => {
    let basePrice = product.price

    Object.values(selectedOptions).forEach((options) => {
      options.forEach((option) => {
        basePrice += option.price
      })
    })

    return basePrice * quantity
  }

  const validateBeforeAddToCart = () => {
    if (!product) return false

    let isValid = true

    product.options?.forEach((option) => {
      const currentSelections = selectedOptions[option.name] || []

      if (option.required && currentSelections.length === 0) {
        isValid = false
      } else if (option.minSelect && currentSelections.length < option.minSelect) {
        isValid = false
      }
    })

    return isValid
  }

  const handleAddToCart = () => {
    if (!validateBeforeAddToCart()) return

    const optionsArray: CartItemOption[] = Object.values(selectedOptions).flat()

    if (isEditing && editingItem) {
      const updatedItem: CartItem = {
        ...editingItem,
        quantity,
        options: optionsArray,
        observation,
      }

      removeFromCart(editingItem.id)
      addToCart({
        productId: updatedItem.productId,
        name: updatedItem.name,
        price: updatedItem.price,
        quantity: updatedItem.quantity,
        options: updatedItem.options,
        observation: updatedItem.observation,
      })
    } else {
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        options: optionsArray,
        observation: observation.trim() || undefined,
      })
    }

    router.push('/cart')
  }

  return (
    <main className="pb-20">
      <div className="relative h-64 w-full">
        <Image src={product.image || '/images/products/placeholder.png'} alt={product.name} width={500} height={256} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="p-4">
        <h1 className="text-xl font-bold text-text-primary">{product.name}</h1>

        <div className="mt-2">
          <span className="font-extrabold">a partir de </span>
          <span className="text-xl font-extrabold text-primary">R$ {formatPrice(product.price)}</span>
        </div>

        <p className="mt-1 text-sm">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="mr-2 font-bold text-text-primary">quantos?</span>

          <div className="flex items-center">
            {isEditing ? (
              <div className="flex items-center overflow-hidden rounded-lg border">
                <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="bg-gray-100 px-3 py-1">
                  <Minus size={16} />
                </button>
                <span className="px-3">{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="bg-gray-100 px-3 py-1">
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <>
                <button
                  disabled={quantity === 1}
                  onClick={() => setQuantity(1)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${quantity === 1 ? 'cursor-not-allowed opacity-20' : ''}`}
                >
                  <Trash2 size={16} />
                </button>
                <span className="mx-3">{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <Plus size={16} />
                </button>
              </>
            )}
          </div>
        </div>

        <div>
          total: <span className="font-bold text-text-primary"> R$ {formatPrice(calculateTotalPrice())}</span>
        </div>

        {product.options &&
          product.options.map((option) => {
            const selectedCount = selectedOptions[option.name]?.length || 0

            return (
              <div key={option.id} className="mt-6 border-t-4 pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold text-text-primary">
                    {option.name}
                    <br />
                    <span className={`text-xs font-bold text-text-medium`}>
                      {option.multiSelect ? `${selectedCount} escolhidos (${option.minSelect || 1}-${option.maxSelect || '∞'})` : 'escolha 1'}
                    </span>
                  </h3>
                  {option.required && <span className="rounded bg-gray-700 px-2 py-1 text-xs font-bold text-white">obrigatório</span>}
                </div>

                <div className="space-y-6 pt-3">
                  {option.items.map((item) => {
                    const isSelected = isOptionSelected(option.name, item.name)
                    const isDisabled = option.maxSelect && selectedCount >= option.maxSelect && !isSelected

                    return (
                      <div key={item.id} className="flex items-center">
                        {option.multiSelect ? (
                          <input
                            type="checkbox"
                            id={`option-${option.id}-${item.id}`}
                            checked={isSelected}
                            onChange={() => handleOptionSelect(option.name, item.name, item.price || 0, true, option.maxSelect, option.required)}
                            disabled={!!isDisabled}
                            className={`mr-3 h-5 w-5 accent-primary ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                          />
                        ) : (
                          <input
                            type="radio"
                            id={`option-${option.id}-${item.id}`}
                            name={`option-${option.id}`}
                            checked={isSelected}
                            onChange={() => handleOptionSelect(option.name, item.name, item.price || 0, false, option.maxSelect, option.required)}
                            className="mr-3 h-5 w-5 accent-primary"
                          />
                        )}
                        <label htmlFor={`option-${option.id}-${item.id}`} className={`flex-1 ${isDisabled ? 'opacity-60' : ''}`}>
                          {item.name}
                        </label>
                        {item.price !== null && item.price !== 0 && (
                          <span className="font-bold">
                            <span className={item.price > 0 ? 'text-primary' : 'text-green-600'}>
                              {item.price > 0 ? '+' : ''}
                              R$ {formatPrice(item.price)}
                            </span>
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

        <div className="mt-6 border-t-4 pt-4">
          <h3 className="mb-2 font-medium">
            alguma observação do item? <span className="text-sm text-gray-500">• opcional</span>
          </h3>
          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="ex: tirar algum ingrediente, ponto do prato"
            className="w-full rounded-lg border p-3 text-sm"
            rows={3}
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <button onClick={handleAddToCart} className={`w-full rounded-lg py-3 font-bold text-white ${validateBeforeAddToCart() ? 'bg-primary' : 'cursor-not-allowed bg-gray-400'}`}>
          {isEditing ? 'atualizar' : 'adicionar'} ao ticket
        </button>
      </div>
    </main>
  )
}
