import React, { FC } from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from 'src/styles/GlobalStyles'
import Layout from 'src/components/common/Layout'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
)
export default App
