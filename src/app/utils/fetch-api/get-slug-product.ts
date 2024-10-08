import { api } from '@/services/api'

import type { Products } from '../types'

export const getSlugProduct = async (slug: string): Promise<Products> => {
	await new Promise(resolve => setTimeout(resolve, 1000))
	const response = await api(`/products/${slug}`, {
		next: {
			revalidate: 3600,
		},
	})

	const product = await response.json()

	return product
}
