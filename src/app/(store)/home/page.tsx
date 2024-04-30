import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div className="max-h-[860px] grid grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="#"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform"
          src="/moletom-never-stop-learning.png"
          width={920}
          height={920}
          alt="Blusa moleton"
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moleton Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129,00
          </span>
        </div>
      </Link>

      <Link
        href="#"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform"
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          alt="Blusa moleton"
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moleton Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129,00
          </span>
        </div>
      </Link>

      <Link
        href="#"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform"
          src="/moletom-ia-p-devs.png"
          width={920}
          height={920}
          alt="Blusa moleton"
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moleton Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129,00
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Home
