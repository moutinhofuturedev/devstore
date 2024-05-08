import { api } from '@/services/api'

import { Products } from './types'

export const getProductsFeatured = async (): Promise<Products[]> => {
  const response = await api('/products/featured', {
    next: {
      revalidate: 3600,
    },
  })

  const products = await response.json()

  return products
}
