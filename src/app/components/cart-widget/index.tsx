'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart-context'

export const CartWidget = () => {
	const { cartItemsQuantity } = useCart()
	return (
		<div className='flex items-center gap-2'>
			<ShoppingBag className='w-4 h-4' />
			<span className='text-sm max-md:hidden'>Carrinho</span>
			<span className='text-sm'>({cartItemsQuantity})</span>
		</div>
	)
}
