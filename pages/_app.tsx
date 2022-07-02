import React, { FC } from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

import GlobalStyles from 'src/styles/GlobalStyles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any

// export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric): void {
//   if (typeof window !== 'undefined') {
//     window.gtag('event', name, {
//       event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//       value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//       event_label: id, // id unique to current page load
//       non_interaction: true, // avoids affecting bounce rate.
//     })
//   }
// }
const App: FC<AppProps> = ({ Component, pageProps }) => {
  // const url = `https://wallis.dev${router.route}`

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
          // url,
          description: 'Test page',
          site_name: 'Gyoza',
          images: [],
        }}
        // canonical={url}
      />
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
        {/* <Component {...pageProps} canonical={url} key={url} /> */}
      </AnimatePresence>
    </>
  )
}
export default App
