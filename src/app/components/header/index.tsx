import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from '../cart-widget'
import { SearchForm } from '../search-form'

export const Header = () => {
	return (
		<header className='flex items-center justify-between'>
			<div className='flex items-center gap-5 max-sm:gap-3'>
				<Link
					href='/home'
					className='text-2xl font-extrabold text-white max-sm:text-xl'
				>
					<h1>devstore</h1>
				</Link>

				<SearchForm />
			</div>

			<div className='flex items-center gap-4 max-md:gap-2'>
				<CartWidget />

				<div className='w-px h-4 bg-zinc-700' />

				<Link
					href='/sign-in'
					className='flex items-center gap-2 hover:underline'
				>
					<p className='text-sm max-md:hidden'>Conta</p>
					<Image
						src='https://github.com/moutinhofuturedev.png'
						className='w-8 h-8 rounded-full max-md:w-6 max-md:h-6'
						width={24}
						height={24}
						alt='Minha foto perfil github'
					/>
				</Link>
			</div>
		</header>
	)
}
