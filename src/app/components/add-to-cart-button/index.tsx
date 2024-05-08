'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="flex justify-center items-center mt-8 h-12 rounded-full bg-emerald-600 font-semibold hover:bg-emerald-500 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-emerald-700"
    >
      Adicionar ao carrinho
    </button>
  )
}
