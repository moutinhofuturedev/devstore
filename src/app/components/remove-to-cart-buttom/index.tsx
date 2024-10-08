'use client'

import { toast } from 'sonner'

import { useCart } from '@/contexts/cart-context'

interface RemoveToCartButtonProps {
	productId: number
	productTitle: string
}

export const RemoveToCartButton = ({
	productId,
	productTitle,
}: RemoveToCartButtonProps) => {
	const { removeToCart } = useCart()

	const handleRemoveToCart = () => {
		removeToCart(productId)

		toast.success(`${productTitle} removido do carrinho.`, {
			position: 'bottom-center',
			style: {
				padding: '16px',
				gap: '8px',
				borderRadius: '8px',
				background: '#363636',
				color: '#fff',
			},
		})
	}

	return (
		<button
			type='button'
			onClick={handleRemoveToCart}
			className='flex justify-center items-center mt-4 h-12 rounded-full bg-zinc-800 font-semibold hover:bg-zinc-700 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-emerald-700 disabled:cursor-not-allowed'
			data-testid='modal-removed'
		>
			Remover do carrinho
		</button>
	)
}
