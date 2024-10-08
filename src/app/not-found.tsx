import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='min-h-screen flex justify-center items-center flex-col'>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/home' className='text-violet-500 text-2xl'>
				Return Home
			</Link>
		</div>
	)
}

export default NotFound
