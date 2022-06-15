import React, { FC } from 'react'
import { NextLink } from 'src/components/link'
import { FillImage, ResponsiveImage } from 'src/components/image'
import {
  ProductContainer,
  ImageContainer,
  ProductName,
  Figure,
  TextContainer,
  Title,
  MoreLink,
} from './styled'

interface ProductProps {
  product: SheetGlobal.ProductItem | null
}

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ImageContainer>
        <NextLink href={`/${product.group}`}>
          <ProductName>{product.name}</ProductName>
          <Figure>
            <ResponsiveImage
              src={product.image}
              alt={`image-${product.name}`}
              width={300}
              height={200}
              objectFit="cover"
            />
          </Figure>
        </NextLink>
      </ImageContainer>
      <TextContainer>
        <Title>{product.description}</Title>
        <MoreLink href={`/${product.id}`} />
      </TextContainer>
    </ProductContainer>
  )
}
