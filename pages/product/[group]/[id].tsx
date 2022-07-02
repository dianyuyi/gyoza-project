import React from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { NextLink } from 'src/components/link'
import Layout from 'src/components/layout'

import { getProductsAPI, getStoreInfoAPI } from 'server/sheets/'

interface Props {
  products: SheetGlobal.Products | null
  storeInfos: SheetGlobal.StoreInfos | null
}

const ProductItemPage = ({ products, storeInfos }: Props): JSX.Element => {
  const store = storeInfos[0]
  const router = useRouter()
  const { group, id } = router.query

  const product = products.find((item) => item.id === id)

  return (
    <Layout store={store} pageType="產品id頁">
      <div>ProductGroup</div>
      <div>id: {id}</div>
      <div>{product.name}</div>
      <NextLink href="/">Home</NextLink>
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
  }
}

export default ProductItemPage
