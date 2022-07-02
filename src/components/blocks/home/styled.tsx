import tw, { styled } from 'twin.macro'

type StyleProps = {
  desktop: boolean | null | undefined
}

export const StoreContainer = styled.section`
  ${tw`relative w-screen h-[110vh] overflow-hidden sm:h-[130vh] lg:h-[120vh] bg-[#f2f0ed]`}
`

export const StoreName = styled.div`
  ${tw`absolute w-32 top-6 left-6 z-50 md:left-48 md:top-24`}
`

export const ChineseTitle = styled.div`
  ${tw`w-full leading-10 text-2xl tracking-widest	`}

  p {
    ${tw`mb-7`}
  }
`

export const EngTitle = styled.div`
  ${tw`w-full leading-10 text-xs tracking-widest`}
`

export const LeftWrapper = styled.div(({ desktop }: StyleProps) => [
  tw`absolute overflow-hidden -right-1/3 top-8 md:right-0`,
  desktop && tw`bottom-8 hidden md:block right-auto top-auto`,
])

export const CenterWrapper = styled.div(({ desktop }: StyleProps) => [
  tw`absolute overflow-hidden -translate-x-1/2 z-10 left-[60%] top-[24vh] lg:left-1/2 lg:top-[16vh]`,
  desktop && tw`left-[35%] top-[40vh] z-0 hidden md:block lg:left-1/3 lg:top-auto lg:bottom-[12vh]`,
])

export const RightWrapper = styled.div(({ desktop }: StyleProps) => [
  tw`absolute overflow-hidden -left-1/4 bottom-4 md:-left-8 md:z-20 md:-bottom-8 lg:bottom-2`,
  desktop && tw`top-48 hidden md:block md:-left-24`,
])

export const BottomIntro = styled.h2`
  ${tw`absolute right-8 bottom-0 text-sm vertical-rl z-[100] md:right-[40%] md:bottom-24 lg:right-1/4`}
`

export const IntroSentence = styled.p`
  ${tw`mx-2`}
`
export const IntroChar = styled.span`
  ${tw`my-1 font-light`}
`
