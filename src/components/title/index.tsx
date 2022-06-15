import tw, { styled } from 'twin.macro'

export const VerticalTitle = styled.h2`
  ${tw`text-lg leading-8 tracking-[.5rem] vertical-rl`}
`

export const HorizontalTitle = styled.h2`
  ${tw`text-lg tracking-widest absolute`}

  &:before {
    content: '';
    ${tw`absolute block w-12 h-px bg-[#C5CBD1] top-[calc(50% + 0.125rem)] left-0`}
  }
`
