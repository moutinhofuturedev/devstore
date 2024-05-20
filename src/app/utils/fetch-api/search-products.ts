import { api } from '@/services/api'

import { Products } from '../types'

export const searchProducts = async (query: string): Promise<Products[]> => {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 3600,
    },
  })

  const products = await response.json()

  return products
}
