import { api } from '@/services/api'

import { Products } from './types'

export const getProductsFeatured = async (): Promise<Products[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await api('/featured')
  const products = await response.json()

  return products
}
