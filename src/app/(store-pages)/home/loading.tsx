import { Skeleton } from '@/app/components/skeleton'

const LoadingHome = () => {
	return (
		<div className='h-full grid grid-cols-9 grid-rows-6 gap-6'>
			<Skeleton className='col-span-6 row-span-6 rounded-lg h-[860px]' />
			<Skeleton className='col-span-3 row-span-3 rounded-lg' />
			<Skeleton className='col-span-3 row-span-3 rounded-lg' />
		</div>
	)
}

export default LoadingHome
