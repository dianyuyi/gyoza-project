import React from 'react'
import { GetServerSideProps } from 'next'

import Layout from 'src/components/layout'
import { Product } from 'src/components/item'

import { getProductsAPI, getStoreInfoAPI } from 'server/sheets/'

interface Props {
  products: SheetGlobal.Products | null
  storeInfos: SheetGlobal.StoreInfos | null
}

const ProductPage = ({ products, storeInfos }: Props): JSX.Element => {
  const store = storeInfos[0]

  return (
    <Layout store={store} pageType="商品列表">
      <div>ProductGroup</div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProductsAPI()
  const storeInfos = await getStoreInfoAPI()

  return {
    props: {
      products,
      storeInfos,
    },
    revalidate: 10,
  }
}

export default ProductPage
