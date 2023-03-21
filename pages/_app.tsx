import { Analytics } from '@vercel/analytics/react'
import { Provider } from 'react-wrap-balancer'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import '../styles/globals.css'
import '../styles/markdown.css'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </NextIntlProvider>
  )
}

export default MyApp
