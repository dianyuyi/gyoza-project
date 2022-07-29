import React, { useEffect, useState } from 'react'

import { FillImage, ResponsiveImage } from 'src/components/image'
import { Product } from 'src/components/item'

import Parallax from 'src/components/parallax'
import { Block, TitleWrapper, Title, Subtitle, MoreLink, ContentWrapper } from './styled'

interface HotProductsProps {
  products: SheetGlobal.Products | null
}

const HotProducts = ({ products }: HotProductsProps): JSX.Element => {
  const [filterProducts, setFilterProducts] = useState([])
  useEffect(() => {
    const hotProducts = products.filter((item) => item.hot === 'true')
    setFilterProducts(hotProducts)
  }, [products])
  return (
    <Block>
      <TitleWrapper>
        <Title>主打商品</Title>
        <Subtitle>delicious</Subtitle>
        <MoreLink href="/about" />
      </TitleWrapper>
      <ContentWrapper>
        {filterProducts.length &&
          filterProducts.map((product) => <Product key={product.id} product={product} />)}
      </ContentWrapper>
    </Block>
  )
}

export default HotProducts
