import tw, { styled } from 'twin.macro'

import { NextLink } from 'src/components/link'

export const Wrapper = styled.div`
  ${tw`absolute`}
`
export const Link = styled(NextLink)`
  ${tw`pr-16 h-full leading-6 no-underline inline-block`}
  white-space: nowrap;
  transition: color 0.2s cubic-bezier(0, 0.55, 0.45, 1);

  &:before {
    content: '';
    ${tw`block absolute top-4 right-3 w-10 h-px bg-[#C5CBD1]`}
    transform-origin: 0 0;
  }

  &:after {
    content: '';
    ${tw`block absolute top-1 right-0 w-7 h-7 rounded-full border border-[#C5CBD1]`}
  }
`
