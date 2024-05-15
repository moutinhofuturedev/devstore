'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { toast } from 'sonner'

export const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formaData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formaData.entries())
    const query = data.q as string

    if (!query) {
      return toast.error('Por favor, informe um termo de busca', {
        position: 'top-center',
        style: {
          padding: '16px',
          gap: '8px',
          borderRadius: '8px',
          background: '#363636',
          color: '#fff',
        },
      })
    }

    return router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5" />

      <input
        name="q"
        placeholder="Buscar produtos..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
        autoComplete="off"
        defaultValue={query ?? ''}
      />
    </form>
  )
}
