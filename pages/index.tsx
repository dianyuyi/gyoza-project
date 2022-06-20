import React from 'react'
import { GetStaticProps } from 'next'
import Sidenav from 'src/components/sidenav'
import Layout from 'src/components/layout'
import Home from 'src/components/blocks/home'
import About from 'src/components/blocks/about'
import HotProducts from 'src/components/blocks/hotProducts'
import { getSheetList } from 'server/sheets/googleSheetAPI'

interface Props {
  storeInfos: SheetGlobal.StoreInfos | null
  homeImages: SheetGlobal.HomeImages | null
  products: SheetGlobal.Products | null
}

const Index = ({ storeInfos, homeImages, products }: Props): JSX.Element => {
  const store = storeInfos[0]

  return (
    <Layout title="Home" description={`${store.nameTW} - ${store.nameEN}`}>
      <Sidenav />
      <main>
        <Home store={store} homeImages={homeImages} />
        <About />
        <HotProducts products={products} />
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const storeInfos = await getSheetList('StoreInfo')
  const homeImages = await getSheetList('HomeImages')
  const products = await getSheetList('Products')

  return {
    props: {
      storeInfos,
      homeImages,
      products,
    },
  }
}

export default Index
