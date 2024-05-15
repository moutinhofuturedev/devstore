import { Metadata } from 'next'
import Image from 'next/image'

import { AddToCartButton } from '@/app/components/add-to-cart-button'
import { RemoveToCartButton } from '@/app/components/remove-to-cart-buttom'
import { getSlugProduct } from '@/app/utils/fetch-api/get-slug-product'
import { PriceFormatting } from '@/app/utils/price-formatting'
import { Products } from '@/app/utils/types'
import { api } from '@/services/api'

interface ProductSlug {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({
  params,
}: ProductSlug): Promise<Metadata> => {
  const { title } = await getSlugProduct(params.slug)

  return {
    title,
  }
}

// Geração estática na build
export const generateStaticParams = async () => {
  const response = await api('/products/featured')
  const products: Products[] = await response.json()

  return products.map((product) => {
    return {
      slug: product.slug,
    }
  })
}

const ProductsPage = async ({ params }: ProductSlug) => {
  const { description, image, price, title, sizes, id } = await getSlugProduct(
    params.slug,
  )

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={image}
          alt={description}
          width={900}
          height={900}
          quality={100}
          priority={false}
        />
      </div>

      <div className="flex flex-col justify-center px-12 mb-12">
        <h1 className=" text-3xl font-bold leading-tight">{title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {PriceFormatting.formatPrice(price)}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/juros de{' '}
            {PriceFormatting.formatPriceInstallments(price / 12)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            {sizes.map((size) => {
              return (
                <button
                  key={size}
                  type="button"
                  className="flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-900 text-sm font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-zinc-700 cursor-pointer transition-colors"
                >
                  {size}
                </button>
              )
            })}
          </div>
        </div>

        <AddToCartButton productId={id} productTitle={title} />
        <RemoveToCartButton productId={id} productTitle={title} />
      </div>
    </div>
  )
}

export default ProductsPage
