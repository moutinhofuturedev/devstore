import { env } from '@/env'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const copyrightName = env.NEXT_PUBLIC_COMPANY_NAME || ''

  return (
    <footer className="text-sm text-zinc-500 dark:text-zinc-400">
      <div className="border-t border-zinc-700 py-6 text-sm dark:border-zinc-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            Todos os direitos reservados.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-zinc-400 md:inline-block" />
          <p>Projetado pela Rocketseat</p>
          <p className="md:ml-auto">
            <a
              href="https://github.com/moutinhofuturedev"
              className="text-black dark:text-white"
            >
              Desenvolvido por Paulo Moutinho
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
