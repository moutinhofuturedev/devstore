import { Suspense } from 'react'

import { Footer } from '@/app/components/footer'
import { Header } from '@/app/components/header'
import { CartContextProvider } from '@/contexts/cart-context'

const StoreLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<CartContextProvider>
			<div className='max-auto min-h-screen grid w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8'>
				<Suspense fallback={null}>
					<Header />
					{children}
					<div className='mt-auto'>
						<Footer />
					</div>
				</Suspense>
			</div>
		</CartContextProvider>
	)
}

export default StoreLayout
