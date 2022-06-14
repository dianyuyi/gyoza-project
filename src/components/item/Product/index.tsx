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

export const Product: FC = () => {
  return (
    <ProductContainer>
      <ImageContainer>
        <NextLink href="/">
          <ProductName>蔬菜清湯</ProductName>
          <Figure>
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1625937712842-061738bb1e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80"
              alt=""
              width={300}
              height={200}
              objectFit="cover"
            />
          </Figure>
        </NextLink>
      </ImageContainer>
      <TextContainer>
        <Title>清淡調味，減輕腸胃負擔</Title>
        <MoreLink href="/" />
      </TextContainer>
    </ProductContainer>
  )
}
