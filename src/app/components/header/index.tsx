import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from '../cart-widget'
import { SearchForm } from '../search-form'

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/home" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
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
