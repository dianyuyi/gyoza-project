import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

import GlobalStyles from 'src/styles/GlobalStyles'

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const url = `https://gyoza-project.vercel.app${router.route}`

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="Gyoza"
        openGraph={{
          type: 'website',
          locale: 'zh_TW',
          url,
          description: '純手工,精心美味烹製,主餐點心皆美味',
          site_name: `禾禾西廚房 HoHo's Kitchen`,
          images: [],
        }}
        canonical={url}
      />
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  )
}
export default App
