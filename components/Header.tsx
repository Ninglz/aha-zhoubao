import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import Github from './GitHub'
import { useTheme } from "next-themes";
import ThemeSwitch from './ThemeSwitch'


export default function Header() {
  const t = useTranslations('Index')
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)
  const { theme, setTheme } = useTheme();

  console.log(theme)
  const facicon = theme==='light'?"/icon.png":"/icon-dark.png"

  return (
    <header className='flex justify-between items-center w-full mt-5 border-b-2 pb-0 sm:px-4 px-2'>
      <Link href='/' className='flex space-x-3'>
        <img
          alt='header text'
          src={facicon}
          className='sm:w-12 sm:h-12 w-8 h-8'
          width={50}
          height={50}
        />
        <h1 className='sm:text-4xl text-2xl font-bold ml-2 tracking-tight'>
          {t('title')}
        </h1>
      </Link>
      <div className='flex gap-2'>
        {otherLocale && (
          <div className='relative font-medium text-black-600 before:absolute before:-bottom-0 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100'>
            {/* <Link href={route} locale={otherLocale}>
              {t('switchLocale', { locale: otherLocale })}
            </Link> */}
            <ThemeSwitch/>

          </div>
          
        )}
       
      </div>
    </header>
  )
}
