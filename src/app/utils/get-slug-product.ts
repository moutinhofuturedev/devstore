import { api } from '@/services/api'

import { Products } from './types'

export const getSlugProduct = async (slug: string): Promise<Products> => {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 2, // 2 minutes in cachê
    },
  })

  const product = await response.json()

  return product
}
