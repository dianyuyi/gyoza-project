import tw, { styled } from 'twin.macro'
import { ViewMoreLink } from 'src/components/link'
import { VerticalTitle } from 'src/components/title'

export const ProductContainer = styled.div`
  ${tw`flex flex-col justify-between items-center py-[16vh] mx-auto`}
`

export const ImageContainer = styled.div`
  ${tw`relative w-auto`}
`

export const ProductName = styled(VerticalTitle)`
  ${tw`absolute z-10 -top-6 right-2 bg-white py-2 px-1 shadow`}
`

export const Figure = styled.figure`
  ${tw`w-full h-full min-w-[300px]`}
`

export const TextContainer = styled.div`
  ${tw`w-auto mt-4`}
`
export const Title = styled.div`
  ${tw`text-sm leading-10 tracking-wider`}
`

export const MoreLink = styled(ViewMoreLink)`
  ${tw`mt-2 text-sm`}
`
