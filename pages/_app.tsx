import { Analytics } from '@vercel/analytics/react'
import { Provider } from 'react-wrap-balancer'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import '../styles/globals.css'
import '../styles/markdown.css'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e6aade1cd76dafd574ede5a7c5410bb";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    }
  }
  return (
    <>
    <script dangerouslySetInnerHTML={getAnalyticsTag()}/>

      <NextIntlProvider messages={pageProps.messages}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
        <Analytics />
      </NextIntlProvider>
    </>
  )
}

export default MyApp;
