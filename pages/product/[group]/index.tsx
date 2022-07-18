import React from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { NextLink } from 'src/components/link'
import Layout from 'src/components/layout'
import { Product } from 'src/components/item'

import { getProductsAPI, getStoreInfoAPI } from 'server/sheets/'

interface Props {
  products: SheetGlobal.Products | null
  storeInfos: SheetGlobal.StoreInfos | null
}

const ProductGroupPage = ({ products, storeInfos }: Props): JSX.Element => {
  const store = storeInfos[0]
  const router = useRouter()
  const { group, id } = router.query

  const productGroup = products.filter((item) => item.groupEN === group)

  return (
    <Layout store={store} pageType={`${productGroup[0].groupTW} 全商品`}>
      <div>ProductGroup</div>
      {productGroup.map((product) => (
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

export default ProductGroupPage
