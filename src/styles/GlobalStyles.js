import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: 'jf-jinxuanlatte-2.0';
    src: url('/fonts/jf-jinxuanlatte-2.0/jf-jinxuanlatte-2.0-bold.otf') format('otf');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'jf-jinxuanlatte-2.0';
    src: url('/fonts/jf-jinxuanlatte-2.0/jf-jinxuanlatte-2.0-heavy.otf') format('otf');
    font-weight: 900;
    font-display: swap;
  }

  @font-face {
    font-family: 'jf-jinxuanlatte-2.0';
    src: url('/fonts/jf-jinxuanlatte-2.0/jf-jinxuanlatte-2.0-medium.otf') format('otf');
    font-weight: 500;
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'jf-jinxuanlatte-2.0', serif;
    line-height: 1.8;
    line-break: normal;
    word-wrap: break-word;
  }

  ::selection {
    color: #fff;
    background-color: #b59464;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <Normalize />
  </>
)

export default GlobalStyles
