import { api } from '@/services/api'

import { Products } from '../types'

export const getProductsFeatured = async (): Promise<Products[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await api('/products/featured', {
    next: {
      revalidate: 3600,
    },
  })

  const products = await response.json()

  return products
}
