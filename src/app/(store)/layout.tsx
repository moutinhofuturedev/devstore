import { Header } from '@/app/(store)/components/header'

const StoreLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="max-auto min-h-screen grid w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}

export default StoreLayout
