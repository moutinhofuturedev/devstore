import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
	title: {
		template: '%s | devstore',
		default: 'devstore',
	},
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html className={inter.variable} lang='pt-BR'>
			<body className='bg-zinc-950 text-zinc-50 antialiased'>
				{children}
				<Toaster />
			</body>
		</html>
	)
}

export default RootLayout
