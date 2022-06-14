import tw, { styled } from 'twin.macro'
import { up } from 'styled-breakpoints'

import { VerticalTitle, HorizonTitle } from 'src/components/title'
import { ViewMoreLink } from 'src/components/link'

export const Block = styled.section`
  ${tw`mt-0 pt-0 relative mt-12 pb-16`}

  ${up('md')} {
    margin-top: -16vw;
    padding-top: 12vw;
  }
`
export const TitleWrapper = styled.div`
  ${tw`w-12 block`}
`

export const Title = styled(VerticalTitle)`
  ${tw`ml-[10vw]`}
`
export const Subtitle = styled(HorizonTitle)`
  ${tw`top-0 right-[16vw] pl-12`}
`

export const MoreLink = styled(ViewMoreLink)`
  ${tw`-top-1 right-0 hidden md:inline-block`}
`

export const ContentWrapper = styled.div`
  ${tw`flex flex-col items-center md:flex-row`}
`

export const ImageContent = styled.div`
  ${tw`w-full md:w-1/2`}
`

export const TextContent = styled.div`
  ${tw`w-auto box-border px-[10vw] pt-[4vh] pb-[12vh]`}
`
