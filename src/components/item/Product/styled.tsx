import tw, { styled } from 'twin.macro'
import { ViewMoreLink } from 'src/components/link'
import { VerticalTitle } from 'src/components/title'

export const ProductContainer = styled.div`
  ${tw`flex flex-col justify-between items-center py-[8vh] mx-auto md:py-0 lg:flex-row`}
`

export const ImageContainer = styled.div`
  ${tw`relative w-auto`}
`

export const ProductName = styled(VerticalTitle)`
  ${tw`absolute z-10 -top-6 right-2 bg-white py-2 px-1 shadow`}
`

export const Figure = styled.figure`
  ${tw`w-full h-full min-w-[300px] md:min-w-[200px]`}
`

export const TextContainer = styled.div`
  ${tw`w-auto mt-4 relative lg:ml-4`}
`

export const Title = styled.div`
  ${tw`text-sm leading-10 tracking-wider h-8 relative lg:w-36 lg:leading-6 lg:h-auto lg:mb-2`}

  &:after {
    content: '...';
    ${tw`absolute -right-3 -bottom-2 lg:right-0 lg:bottom-0`}
  }
`

export const MoreLink = styled(ViewMoreLink)`
  ${tw`mt-2 text-sm left-1/2 -translate-x-1/2`}
`
