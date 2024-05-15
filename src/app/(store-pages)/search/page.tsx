import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { searchProducts } from '@/app/utils/fetch-api/search-products'
import { PriceFormatting } from '@/app/utils/price-formatting'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export const generateMetadata = async ({
  searchParams,
}: SearchProps): Promise<Metadata> => {
  const { q: query } = searchParams

  return {
    title: `Resultados para: ${query}`,
  }
}

const Search = async ({ searchParams }: SearchProps) => {
  const { q: query } = searchParams

  if (!query) {
    redirect('/home')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
            >
              <Image
                className="group-hover:scale-105 transition-transform"
                src={product.image}
                width={480}
                height={480}
                alt={product.description}
                quality={100}
                priority={false}
              />

              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {PriceFormatting.formatPrice(product.price)}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Search
