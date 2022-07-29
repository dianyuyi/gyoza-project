import React, { useState, useEffect, Suspense } from 'react'

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
  const [intros, setIntros] = useState([])
  const [homeImageList, setHomeImageList] = useState(homeImages[0])
  const [centerImageWidth, setCenterImageWidth] = useState('250px')
  const [centerImageHeight, setCenterImageHeight] = useState('350px')

  const { nameTW, nameEN, shortIntro } = store

  useEffect(() => {
    const splits = shortIntro.split(',')
    setIntros(splits)
  }, [shortIntro])

  useEffect(() => {
    setHomeImageList(homeImages[0])
  }, [homeImages])

  const breakpoints = useBreakpoints()

  useEffect(() => {
    if (breakpoints.isUpLg) {
      setCenterImageWidth('350px')
      setCenterImageHeight('500px')
    } else {
      setCenterImageWidth('250px')
      setCenterImageHeight('350px')
    }
  }, [breakpoints])

  const defaultImg =
    'https://images.unsplash.com/photo-1612432505109-f28e7a5c351a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'

  return (
    <StoreContainer>
      <StoreName>
        <Suspense fallback="loading...">
          <ChineseTitle>
            {nameTW.split('').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </ChineseTitle>
        </Suspense>
        <Suspense fallback="loading...">
          <EngTitle>{nameEN}</EngTitle>
        </Suspense>
      </StoreName>
      <LeftWrapper desktop={true}>
        <Suspense fallback="loading...">
          <Parallax clampInitial>
            <FillImage
              width="200px"
              height="300px"
              src={homeImageList?.leftTop ?? defaultImg}
              alt=""
              objectFit="cover"
            />
          </Parallax>
        </Suspense>
      </LeftWrapper>
      <LeftWrapper desktop={false}>
        <Suspense fallback="loading...">
          <Parallax clampInitial>
            <FillImage
              width="200px"
              height="300px"
              src={homeImageList?.leftTop ?? defaultImg}
              alt=""
              objectFit="cover"
            />
          </Parallax>
        </Suspense>
      </LeftWrapper>
      <CenterWrapper desktop={true}>
        <Suspense fallback="loading...">
          <Parallax offset={20} clampFinal>
            <FillImage
              width="200px"
              height="300px"
              src={homeImageList?.centerFront ?? defaultImg}
              alt=""
              objectFit="cover"
            />
          </Parallax>
        </Suspense>
      </CenterWrapper>
      <CenterWrapper desktop={false}>
        <Suspense fallback="loading...">
          <Parallax offset={40}>
            <FillImage
              width={centerImageWidth}
              height={centerImageHeight}
              src={homeImageList?.centerFront ?? defaultImg}
              alt=""
              objectFit="cover"
            />
          </Parallax>
        </Suspense>
      </CenterWrapper>
      <RightWrapper desktop={true}>
        <Suspense fallback="loading...">
          <Parallax offset={30}>
            <FillImage
              width="240px"
              height="300px"
              src={homeImageList?.bottomRight ?? defaultImg}
              alt=""
              objectFit="cover"
            />
          </Parallax>
        </Suspense>
      </RightWrapper>
      <RightWrapper desktop={false}>
        <Suspense fallback="loading...">
          <Parallax offset={30}>
            <FillImage
              width="240px"
              height="300px"
              src={homeImageList?.bottomRight ?? defaultImg}
              alt=""
              objectFit="cover"
            />
          </Parallax>
        </Suspense>
      </RightWrapper>
      <BottomIntro>
        <Suspense fallback="loading...">
          <Parallax offset={10}>
            {intros.length &&
              intros.map((intro, introIdx) => {
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
        </Suspense>
      </BottomIntro>
    </StoreContainer>
  )
}

export default Home
