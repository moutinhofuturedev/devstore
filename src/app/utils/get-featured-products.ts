import { api } from '@/services/api'
import { Products } from './types'

export const getProductsFeatured = async (): Promise<Products[]> => {
  const response = await api('/featured')
  const products = await response.json()

  return products
}
