import tw, { styled } from 'twin.macro'

export const PrintButton = styled.button`
  ${tw`fixed p-2 bg-[#222] text-white text-sm w-12 top-1/2 rounded-sm`}
`

export const Block = styled.section`
  ${tw`m-auto p-4 container
    print:w-[21cm] print:h-[29.7cm] print:p-0 print:mt-4
  `}
`

export const GridContainer = styled.div`
  ${tw`bg-white grid grid-cols-3 gap-x-4 gap-y-12`}
`

export const MenuTitle = styled.h2`
  ${tw`text-5xl mx-auto py-8 text-center`}
`

export const GroupTitle = styled.div`
  ${tw`bg-[#222] text-white text-center p-4 py-2 mb-4 text-lg tracking-widest font-bold`}
`

export const GroupBox = styled.div`
  ${tw`block`}
`
