import React, { FC } from 'react'
import { FillImage } from 'src/components/image'
import {
  StoreContainer,
  StoreName,
  ChineseTitle,
  EngTitle,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
} from './styled'

const Home: FC = () => {
  const twName = '好餃傲'
  const enName = 'Gyoza, Wonton, Noodle'
  return (
    <StoreContainer>
      <StoreName>
        <ChineseTitle>
          {twName.split('').map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </ChineseTitle>
        <EngTitle>{enName}</EngTitle>
      </StoreName>
      <LeftWrapper>
        <FillImage
          width="200px"
          height="200px"
          src={
            'https://images.unsplash.com/photo-1612432505109-f28e7a5c351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          }
          alt=""
        />
      </LeftWrapper>
      <CenterWrapper>
        <FillImage
          width="200px"
          height="200px"
          src={
            'https://images.unsplash.com/photo-1612432505109-f28e7a5c351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          }
          alt=""
        />
      </CenterWrapper>
      <RightWrapper>
        <FillImage
          width="200px"
          height="200px"
          src={
            'https://images.unsplash.com/photo-1612432505109-f28e7a5c351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          }
          alt=""
        />
      </RightWrapper>
    </StoreContainer>
  )
}

export default Home
