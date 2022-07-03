import React from 'react'
import { GetStaticProps } from 'next'

import Menu from 'src/components/blocks/menu'
import Layout from 'src/components/layout'

import { getProductsAPI, getStoreInfoAPI } from 'server/sheets/'

interface Props {
  products: SheetGlobal.Products | null
  storeInfos: SheetGlobal.StoreInfos | null
}

const MenuPage = ({ products, storeInfos }: Props): JSX.Element => {
  const store = storeInfos[0]

  return (
    <Layout store={store} pageType="菜單">
      <Menu products={products} store={store} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProductsAPI()
  const storeInfos = await getStoreInfoAPI()

  return {
    props: {
      products,
      storeInfos,
    },
  }
}

export default MenuPage
