'use client'

import { toast } from 'sonner'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart, items } = useCart()

  const handleAddToCart = () => {
    addToCart(productId)

    toast.success('Produto adicionado ao carrinho!', {
      position: 'bottom-right',
      style: {
        padding: '16px',
        gap: '8px',
        borderRadius: '8px',
        background: '#363636',
        color: '#fff',
      },
    })
  }

  const isDisabled =
    items.length >= 1 && items.some((item) => item.productId === productId)

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="flex justify-center items-center mt-8 h-12 rounded-full bg-emerald-600 font-semibold hover:bg-emerald-500 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-emerald-700 disabled:cursor-not-allowed"
      disabled={isDisabled}
      aria-label="Adicionar ao carrinho"
    >
      Adicionar ao carrinho
    </button>
  )
}
