import React from 'react'
import { GetStaticProps } from 'next'
import { useDispatch, useSelector } from 'src/redux/store'
// import { useDispatch, useSelector } from 'react-redux'
import { wrapper } from 'src/redux/store'

import Sidenav from 'src/components/sidenav'
import Layout from 'src/components/layout'
import Home from 'src/components/blocks/home'
import About from 'src/components/blocks/about'
import HotProducts from 'src/components/blocks/hotProducts'
import { getSheetList } from 'server/sheets/googleSheetAPI'
// import { setStoreInfo, getStoreInfo } from 'src/redux/sheet/storeInfoSlice'

interface Props {
  storeInfos: SheetGlobal.StoreInfos | null
  homeImages: SheetGlobal.HomeImages | null
  products: SheetGlobal.Products | null
}

const Index = ({ storeInfos, homeImages, products }: Props): JSX.Element => {
  const dispatch = useDispatch()
  // const storeInfoSheet = useSelector(getStoreInfo)
  // console.log(storeInfos, storeInfoSheet)
  // const store = storeInfos[0]
  const store = {
    nameTW: '000',
    nameEN: '111',
    shortIntro: '222',
    phone: '333',
    address: '444',
  }

  return (
    <Layout title="Home" description={`${store.nameTW} - ${store.nameEN}`}>
      <Sidenav />
      <main>
        <Home store={store} homeImages={homeImages} />
        <About />
        {/* <HotProducts products={products} /> */}
      </main>
    </Layout>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
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
