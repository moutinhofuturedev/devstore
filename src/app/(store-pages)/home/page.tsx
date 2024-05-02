import Image from 'next/image'
import Link from 'next/link'

import { getProductsFeatured } from '@/app/utils/get-featured-products'
import { priceFormatting } from '@/app/utils/price-formatting'

const Home = async () => {
  const [highlightedProduct, ...otherProducts] = await getProductsFeatured()

  return (
    <div className="max-h-[860px] grid grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/featured/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform"
          src={highlightedProduct.image}
          width={920}
          height={920}
          alt={highlightedProduct.description}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {priceFormatting(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((products) => {
        return (
          <Link
            key={products.id}
            href={`/featured/${products.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              className="group-hover:scale-105 transition-transform"
              src={products.image}
              width={920}
              height={920}
              alt={products.description}
              quality={100}
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{products.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {priceFormatting(products.price)}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
