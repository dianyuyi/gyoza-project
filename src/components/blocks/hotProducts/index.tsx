import React, { FC } from 'react'

import { FillImage, ResponsiveImage } from 'src/components/image'
import { Product } from 'src/components/item'

import Parallax from 'src/components/parallax'
import { Block, TitleWrapper, Title, Subtitle, MoreLink, ContentWrapper } from './styled'

const HotProducts: FC = () => {
  const twName = '好餃傲'
  const enName = 'Gyoza, Wonton, Noodle'
  return (
    <Block>
      <TitleWrapper>
        <Title>主打商品</Title>
        <Subtitle>delicious</Subtitle>
        <MoreLink href="/about" />
      </TitleWrapper>
      <ContentWrapper>
        <Product />
      </ContentWrapper>
    </Block>
  )
}

export default HotProducts
