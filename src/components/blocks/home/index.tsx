import React, { useState, useEffect } from 'react'

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
import { useBreakpoints } from 'src/hook'

interface HomeProps {
  store: SheetGlobal.StoreInfo | null
  homeImages: SheetGlobal.HomeImages | null
}

const Home = ({ store, homeImages }: HomeProps): JSX.Element => {
  const { nameTW, nameEN, shortIntro } = store
  const homeImageList = homeImages[0]
  const breakpoints = useBreakpoints()

  const [centerImage, setCenterImage] = useState({ width: '250px', height: '350px' })
  const [centerImageWidth, setCenterImageWidth] = useState('250px')
  const [centerImageHeight, setCenterImageHeight] = useState('350px')
  useEffect(() => {
    if (breakpoints.isUpLg) {
      setCenterImageWidth('350px')
      setCenterImageHeight('500px')
      // setCenterImage({ ...centerImage,
      //   width: '350px',
      //   height: '500px',
      // })
    } else {
      setCenterImageWidth('250px')
      setCenterImageHeight('350px')
      // setCenterImage({ ...centerImage,
      //   width: '250px',
      //   height: '350px',
      // })
    }
  }, [breakpoints])

  const intros = shortIntro.split(',')
  const defaultImg =
    'https://images.unsplash.com/photo-1612432505109-f28e7a5c351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'

  return (
    <StoreContainer>
      <StoreName>
        <ChineseTitle>
          {nameTW.split('').map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </ChineseTitle>
        <EngTitle>{nameEN}</EngTitle>
      </StoreName>
      <LeftWrapper desktop={true}>
        <Parallax clampInitial>
          <FillImage
            width="200px"
            height="300px"
            src={homeImageList?.leftTop ?? defaultImg}
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </LeftWrapper>
      <LeftWrapper desktop={false}>
        <Parallax clampInitial>
          <FillImage
            width="200px"
            height="300px"
            src={homeImageList?.leftTop ?? defaultImg}
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </LeftWrapper>
      <CenterWrapper desktop={true}>
        <Parallax offset={20} clampFinal>
          <FillImage
            width="200px"
            height="300px"
            src={homeImageList?.centerFront ?? defaultImg}
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </CenterWrapper>
      <CenterWrapper desktop={false}>
        <Parallax offset={40}>
          <FillImage
            width={centerImageWidth}
            height={centerImageHeight}
            src={homeImageList?.centerFront ?? defaultImg}
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </CenterWrapper>
      <RightWrapper desktop={true}>
        <Parallax offset={30}>
          <FillImage
            width="240px"
            height="300px"
            src={homeImageList?.bottomRight ?? defaultImg}
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </RightWrapper>
      <RightWrapper desktop={false}>
        <Parallax offset={30}>
          <FillImage
            width="240px"
            height="300px"
            src={homeImageList?.bottomRight ?? defaultImg}
            alt=""
            objectFit="cover"
          />
        </Parallax>
      </RightWrapper>
      <BottomIntro>
        <Parallax offset={10}>
          {intros.map((intro, introIdx) => {
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
