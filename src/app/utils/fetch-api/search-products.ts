import { api } from '@/services/api'

import { Products } from '../types'

export const searchProducts = async (query: string): Promise<Products[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 3600,
    },
  })

  const products = await response.json()

  return products
}
