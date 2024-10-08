import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { getSlugProduct } from '@/app/utils/fetch-api/get-slug-product'
import { env } from '@/env'

export const alt = 'About Acme'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

interface ProductSlug {
	params: {
		slug: string
	}
}

const Image = async ({ params }: ProductSlug) => {
	const { image, description } = await getSlugProduct(params.slug)
	const productImageURL = new URL(image, env.NEXT_APP_IMAGE_URL).toString()

	return new ImageResponse(
		// ImageResponse JSX element
		<div
			style={{
				background: colors.zinc[950],
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<img
				src={productImageURL}
				alt={description}
				style={{ width: '100%', height: '100%', objectFit: 'contain' }}
			/>
		</div>,
		{
			...size,
		},
	)
}

export default Image
