import tw, { styled } from 'twin.macro'
import { up } from 'styled-breakpoints'

export const Block = styled.section`
  ${tw`mt-0 pt-0 relative pb-8`}

  ${up('md')} {
    margin-top: -16vw;
    padding-top: 12vw;
  }
`

export const ContentWrapper = styled.div`
  ${tw`bg-white flex flex-col items-center`}
`

export const ImageContent = styled.div`
  ${tw`w-full md:w-1/2`}
`

export const TextContent = styled.div`
  ${tw`w-auto box-border px-[10vw] pt-[4vh] pb-[12vh]`}
`

export const BlockTitle = styled.h2`
  ${tw`pl-12 text-lg tracking-wide absolute`}

  &:before {
    content: '';
    ${tw`absolute block w-12 h-px bg-[#C5CBD1] top-1/2 left-0`}
  }
`

export const MainContext = styled.div`
  white-space: pre-line;
  ${tw`text-base leading-8 mt-6`};
`

export const SubContext = styled.div`
  ${tw`mt-4 text-xs tracking-wider	leading-6`}
`
