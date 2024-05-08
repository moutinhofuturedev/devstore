import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from '../cart-widget'

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/home" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5" />

          <input
            placeholder="Buscar produtos..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link
          href="/sign-in"
          className="flex items-center gap-2 hover:underline"
        >
          <span className="text-sm">Conta</span>
          <Image
            src="https://github.com/moutinhofuturedev.png"
            className="w-8 h-8 rounded-full"
            width={24}
            height={24}
            alt="Minha foto perfil github"
          />
        </Link>
      </div>
    </header>
  )
}
