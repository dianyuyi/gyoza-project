// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { FC } from 'react'
import { wrapper } from 'src/redux'
import 'src/i18n'
import GlobalStyles from 'src/components/GlobalStyles'
import Layout from 'src/components/common/Layout'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
)
export default wrapper.withRedux(WrappedApp)
