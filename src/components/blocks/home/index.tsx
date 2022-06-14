import React, { FC } from 'react'

import { FillImage } from 'src/components/image'
import Parallax from 'src/components/parallax'
import {
  StoreContainer,
  StoreName,
  ChineseTitle,
  EngTitle,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
  BottomIntro,
  IntroSentence,
  IntroChar,
} from './styled'

const Home: FC = () => {
  const twName = '好餃傲'
  const enName = 'Gyoza, Wonton, Noodle'
  const shortIntro = ['純手工', '精心美味烹製', '主餐點心皆美味']
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
        <Parallax clampInitial>
          <FillImage
            width="200px"
            height="300px"
            src={
              'https://images.unsplash.com/photo-1612432505109-f28e7a5c351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            }
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </LeftWrapper>
      <CenterWrapper>
        <Parallax offset={10}>
          <FillImage
            width="250px"
            height="350px"
            src={
              'https://images.unsplash.com/photo-1607095097076-bf0221751ed6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
            }
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </CenterWrapper>
      <RightWrapper>
        <Parallax offset={30}>
          <FillImage
            width="240px"
            height="300px"
            src={
              'https://images.unsplash.com/photo-1562447457-579fc34967fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </RightWrapper>
      <BottomIntro>
        <Parallax offset={10}>
          {shortIntro.map((intro, introIdx) => {
            const str = intro.split('')
            return (
              <IntroSentence key={introIdx}>
                {str.map((char, charIdx) => (
                  <IntroChar key={charIdx}>{char}</IntroChar>
                ))}
              </IntroSentence>
            )
          })}
        </Parallax>
      </BottomIntro>
    </StoreContainer>
  )
}

export default Home
