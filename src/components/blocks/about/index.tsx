import React, { FC } from 'react'

import { FillImage, ResponsiveImage } from 'src/components/image'
import Parallax from 'src/components/parallax'
import {
  Block,
  ContentWrapper,
  ImageContent,
  TextContent,
  BlockTitle,
  MainContext,
  SubContext,
} from './styled'

const About: FC = () => {
  const twName = '好餃傲'
  const enName = 'Gyoza, Wonton, Noodle'
  return (
    <Block>
      <ContentWrapper>
        <ImageContent>
          <ResponsiveImage
            src="https://images.unsplash.com/photo-1589047133481-02b4a5327d89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            width={300}
            height={240}
            objectFit="cover"
          />
        </ImageContent>
        <Parallax offset={40}>
          <TextContent>
            <BlockTitle>緣起</BlockTitle>
            <MainContext>
              {`
                追求食材的健康與美味，
                獻給家人最好的禮物
              `}
            </MainContext>
            <SubContext>
              低脂新鮮豬肉加上脆綠蔬菜，再搭配全天然調味，讓您吃了少負擔又營養。
            </SubContext>
          </TextContent>
        </Parallax>
      </ContentWrapper>
    </Block>
  )
}

export default About
