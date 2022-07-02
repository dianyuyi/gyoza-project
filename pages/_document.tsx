import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="zh-TW">
        <Head>
          <link
            rel="preload"
            href="/fonts/jf-jinxuanlatte-2.0/jf-jinxuanlatte-2.0-bold.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/jf-jinxuanlatte-2.0/jf-jinxuanlatte-2.0-heavy.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/jf-jinxuanlatte-2.0/jf-jinxuanlatte-2.0-medium.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
