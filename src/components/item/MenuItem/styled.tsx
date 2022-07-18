import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`flex flex-col justify-between items-center mx-auto px-4 mb-1`}
`

export const Box = styled.div`
  ${tw`flex justify-between w-full`}
`
export const Name = styled.div`
  ${tw`m-0`}
`
export const Price = styled.div`
  ${tw`m-0`}
`

export const Note = styled.p`
  ${tw`text-xs text-white bg-[#222] rounded-lg px-2 `}
`
