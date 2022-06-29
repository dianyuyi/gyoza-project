import tw, { styled } from 'twin.macro'

export const Block = styled.section`
  ${tw`m-auto p-4 container`}
`

export const GridContainer = styled.div`
  ${tw`bg-white grid grid-cols-3 gap-x-4 gap-y-8`}
`

export const GroupTitle = styled.div`
  ${tw`bg-[#222] text-white text-center p-4 py-2 mb-4 text-lg`}
`

export const GroupBox = styled.div`
  ${tw`block`}
`
