import Image from 'next/image'

import { getSlugProduct } from '@/app/utils/get-slug-product'
import { PriceFormatting } from '@/app/utils/price-formatting'

interface ProductSlug {
  params: {
    slug: string
  }
}

const Products = async ({ params }: ProductSlug) => {
  const { description, image, price, title, sizes } = await getSlugProduct(
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
        />
      </div>

      <div className="flex flex-col justify-center px-12">
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
                  className="flex items-center justify-center h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-900 transition-all text-sm font-semibold"
                >
                  {size}
                </button>
              )
            })}
          </div>
        </div>

        <button className="flex justify-center items-center mt-8 h-12 rounded-full bg-emerald-600 font-semibold hover:bg-emerald-500 transition-all">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

export default Products
