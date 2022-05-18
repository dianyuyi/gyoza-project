import React, { FC } from 'react'
import ProductDetail from './item'
import LinkButton from 'src/components/common/LinkButton'

interface Props {
  sheetData: SheetGlobal.ProductItems | null
}

const Product: FC<Props> = ({ sheetData }) => {
  return (
    <>
      <ProductDetail sheetData={sheetData} />
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}
export default Product
