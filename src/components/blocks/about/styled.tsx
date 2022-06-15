import tw, { styled } from 'twin.macro'
import { up } from 'styled-breakpoints'
import { HorizontalTitle } from 'src/components/title'

export const Block = styled.section`
  ${tw`mt-0 pt-0 relative mt-12 pb-16`}

  ${up('md')} {
    margin-top: -16vw;
    padding-top: 12vw;
  }
`

export const ContentWrapper = styled.div`
  ${tw`bg-white flex flex-col items-center md:flex-row`}
`

export const ImageContent = styled.div`
  ${tw`w-full md:w-1/2`}
`

export const TextContent = styled.div`
  ${tw`w-auto box-border px-[10vw] py-[16vh]`}
`

export const BlockTitle = styled(HorizontalTitle)`
  ${tw`pl-12`}
`

export const MainContext = styled.div`
  white-space: pre-line;
  ${tw`text-base leading-8 mt-6`};
`

export const SubContext = styled.div`
  ${tw`mt-4 text-xs tracking-wider	leading-6`}
`
