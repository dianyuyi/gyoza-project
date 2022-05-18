import React from 'react'
import { NextPage } from 'next'
import Product from 'src/components/Product'
import { Title } from 'src/components/common'
import { getSheetList } from 'src/utils/sheet_2'

interface Props {
  sheetData: SheetGlobal.ProductItems | null
}

const ProductPage: NextPage<Props> = ({ sheetData }) => {
  return (
    <div>
      <Title>餃子</Title>
      <Product sheetData={sheetData} />
    </div>
  )
}

export async function getStaticProps() {
  const sheetName = 'Products'
  const data = await getSheetList(sheetName)
  return {
    props: {
      sheetData: data, // remove sheet header
    },
  }
}
export default ProductPage
