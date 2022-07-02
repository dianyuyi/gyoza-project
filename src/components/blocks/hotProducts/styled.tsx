import tw, { styled } from 'twin.macro'
import { up } from 'styled-breakpoints'

import { VerticalTitle, HorizontalTitle } from 'src/components/title'
import { ViewMoreLink } from 'src/components/link'

export const Block = styled.section`
  ${tw`mt-0 pt-0 relative mt-12 pb-16 `}
`
export const TitleWrapper = styled.div`
  ${tw`w-12 block md:w-full lg:max-w-5xl lg:mx-auto`}
`

export const Title = styled(VerticalTitle)`
  ${tw`ml-[10vw] md:absolute`}
`
export const Subtitle = styled(HorizontalTitle)`
  ${tw`top-0 right-[16vw] pl-12 md:left-[20vw] md:right-auto lg:left-[32vw]`}
`

export const MoreLink = styled(ViewMoreLink)`
  ${tw`-top-1 right-0 hidden md:inline-block md:right-12 lg:right-[16vw]`}
`

export const ContentWrapper = styled.div`
  ${tw`flex flex-col items-center md:flex-row md:pl-[10vw] md:pt-[16vh] lg:max-w-5xl lg:mx-auto lg:pl-[16vw]`}
`

export const ImageContent = styled.div`
  ${tw`w-full md:w-1/2`}
`

export const TextContent = styled.div`
  ${tw`w-auto box-border px-[10vw] pt-[4vh] pb-[12vh]`}
`
