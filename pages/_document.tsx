import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <link rel='icon' href='/icon.png' />
          <link
            rel='apple-touch-icon'
            sizes='192x192'
            href='/icon.png'
          ></link>
          <meta property='og:image' content='/og-image.png' />
          <meta name='twitter:image' content='/og-image.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
