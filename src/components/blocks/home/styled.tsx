import tw, { styled } from 'twin.macro'

export const StoreContainer = styled.section`
  ${tw`relative w-screen h-[130vh] overflow-hidden`}
`

export const StoreName = styled.div`
  ${tw`absolute w-32 top-6 left-6 z-20`}
`

export const ChineseTitle = styled.div`
  ${tw`w-full leading-10 text-2xl tracking-widest	`}

  p {
    ${tw`mb-8`}
  }
`

export const EngTitle = styled.div`
  ${tw`w-full leading-10 text-xs tracking-widest`}
`

export const LeftWrapper = styled.div`
  ${tw`absolute overflow-hidden -right-1/3 top-8`}
`

export const CenterWrapper = styled.div`
  ${tw`absolute overflow-hidden left-[60%] -translate-x-1/2 top-[24vh] z-10`}
`

export const RightWrapper = styled.div`
  ${tw`absolute overflow-hidden -left-1/4 bottom-4`}
`

export const BottomIntro = styled.h2`
  ${tw`absolute right-8 bottom-0 text-sm vertical-rl z-50`}
`

export const IntroSentence = styled.p`
  ${tw`mx-2`}
`
export const IntroChar = styled.span`
  ${tw`my-1 font-light`}
`
