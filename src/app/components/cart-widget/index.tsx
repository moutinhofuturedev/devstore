'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart-context'

export const CartWidget = () => {
  const { items } = useCart()
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  )
}
