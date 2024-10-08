import { Skeleton } from '@/app/components/skeleton'

const SearchLoading = () => {
	return (
		<div className='flex flex-col gap-4'>
			<p className='text-sm'>
				<Skeleton className='h-6 w-40' />
			</p>

			<div className='grid grid-cols-3 gap-6'>
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
			</div>
		</div>
	)
}

export default SearchLoading
