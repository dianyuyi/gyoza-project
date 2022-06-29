import React from 'react'
import { GetStaticProps } from 'next'
import Menu from 'src/components/blocks/menu'
import { getSheetList } from 'server/sheets/googleSheetAPI'
import Layout from 'src/components/layout'

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
  const products = await getSheetList('Products')

  return {
    props: {
      products,
    },
  }
}

export default MenuPage
