import React from 'react'
import { GetStaticProps } from 'next'

import Menu from 'src/components/blocks/menu'
import Layout from 'src/components/layout'
import { getProductsAPI } from 'server/sheets/'

interface Props {
  products: SheetGlobal.Products | null
}
const MenuPage = ({ products }: Props): JSX.Element => {
  return (
    <Layout title="Home" description={`施工實驗中...`}>
      <Menu products={products} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProductsAPI()

  return {
    props: {
      products,
    },
  }
}

export default MenuPage
