import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

import Header from 'src/components/blocks/header'
import Footer from 'src/components/blocks/footer'

type Props = {
  children: ReactNode
  pageType: string
  store: SheetGlobal.StoreInfo | null
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, store, pageType }: Props): JSX.Element => {
  const title = `${store.nameTW} - ${store.nameEN} ${pageType}`
  const description = store.shortIntro

  return (
    <div>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="flex flex-col items-start w-full pt-10
      px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
      h-full"
      >
        <Header />
        {children}
        <Footer store={store} />
      </motion.main>
    </div>
  )
}

export default Layout
