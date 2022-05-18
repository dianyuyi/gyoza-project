import React, { FC } from 'react'
import NextImage from 'next/image'
import { styled } from 'twin.macro'
import { Card } from 'antd'

const Intro = styled.div`
  font-size: 16px;
`

const CardContainer = styled(Card)`
  width: 400px;
  margin: 20px auto;
  text-align: left;
`

const Item = styled.div`
  margin: 10px 0;
`

interface Props {
  sheetData: SheetGlobal.ProductItems | null
}

const ProductDetail: FC<Props> = ({ sheetData }) => {
  return (
    <>
      <Intro>餃子</Intro>
      <CardContainer title="餃子菜單" loading={false}>
        {sheetData.map((row, index) => {
          return (
            <div key={index}>
              <Item>{row.group}</Item>
              <Item>{row.id}</Item>
              <Item>{row.name}</Item>
              <Item>{row.note ?? 'none'}</Item>
              <Item>{row.price}</Item>
              <Item>{row.image}</Item>
              <NextImage width="200" height="150" layout="responsive" src={row.image} />
            </div>
          )
        })}
      </CardContainer>
    </>
  )
}

export default ProductDetail
