import React from 'react'
import { NextLink } from 'src/components/link'
import { ResponsiveImage } from 'src/components/image'
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
  product: SheetGlobal.Product | null
}

export const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <ProductContainer>
      <ImageContainer>
        <NextLink href={`/product/${product.groupEN}`}>
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
        <Title>{product.description.substring(0, 15)}</Title>
        <MoreLink href={`/product/${product.groupEN}/${product.id}`} />
      </TextContainer>
    </ProductContainer>
  )
}
