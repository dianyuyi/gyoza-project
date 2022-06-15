import React, { FC } from 'react'

import { FillImage, ResponsiveImage } from 'src/components/image'
import { Product } from 'src/components/item'

import Parallax from 'src/components/parallax'
import { Block, TitleWrapper, Title, Subtitle, MoreLink, ContentWrapper } from './styled'

interface Props {
  products: SheetGlobal.ProductItems | null
}

const testData = [
  {
    group: 'soup',
    id: 'g1',
    name: '蔬菜清湯',
    note: '素',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1625937712842-061738bb1e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80',
    description: '清淡調味，減輕腸胃負擔',
  },
]

const HotProducts: FC<Props> = ({ products = testData }) => {
  return (
    <Block>
      <TitleWrapper>
        <Title>主打商品</Title>
        <Subtitle>delicious</Subtitle>
        <MoreLink href="/about" />
      </TitleWrapper>
      <ContentWrapper>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ContentWrapper>
    </Block>
  )
}

export default HotProducts
