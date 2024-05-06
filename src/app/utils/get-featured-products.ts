import { api } from '@/services/api'

import { Products } from './types'

export const getProductsFeatured = async (): Promise<Products[]> => {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 2, // 2 minutes in cachê
    },
  })

  const products = await response.json()

  return products
}
