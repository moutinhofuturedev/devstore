import { NextResponse } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

interface ProductsParams {
  params: {
    slug: string
  }
}
export const GET = (_: Request, { params }: ProductsParams) => {
  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return new NextResponse('Product not found', { status: 400 })
  }

  return Response.json(product)
}

// Route Handlers dados de produtos buscados pelo slug
