import tw, { styled } from 'twin.macro'
import { up } from 'styled-breakpoints'

import { NextLink } from 'src/components/link'

export const SlideBanner = styled(NextLink)`
  ${tw`block`}
`

export const SlidePrevButton = styled.button`
  transform: translate(0, -50%);
  ${tw`left-5 h-28 w-10 absolute hidden top-1/2 z-10 cursor-pointer p-0`}

  &:before {
    content: '';
    background: url('https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/image/bbcstore/common/silder_arrow_solid_left.svg');
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    ${tw`w-10 h-28 block`}
  }

  ${up('sm')} {
    ${tw`block`}
  }
`
export const SlideNextButton = styled.button`
  transform: translate(0, -50%);
  ${tw`right-5 h-28 w-10 absolute hidden top-1/2 z-10 cursor-pointer p-0`}

  &:before {
    content: '';
    background: url('https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/image/bbcstore/common/silder_arrow_solid_right.svg');
    background-position: center center;
    background-size: 100%;
    display: block;
    background-repeat: no-repeat;
    ${tw`w-10 h-28 block`}
  }

  ${up('sm')} {
    ${tw`block`}
  }
`

export const SlidePagination = styled.div`
  // Swiper generate elements
  & .swiper-pagination-bullet {
    ${tw`bg-white border border-black mx-1`}
  }

  & .swiper-pagination-bullet-active {
    ${tw`bg-black opacity-75`}
  }
`
