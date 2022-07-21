import tw, { styled } from 'twin.macro'

type FooterProps = {
  pageType: string
}

export const StyledFooter = styled.div(({ pageType }: FooterProps) => [
  tw`bg-[#222] text-white mt-8`,
  pageType === '菜單' && tw`hidden sm:block`,
])

export const Container = styled.div`
  ${tw`container grid grid-cols-2 gap-4 place-content-center py-8 mx-auto`}
`

export const InfoBox = styled.div`
  ${tw`flex flex-col justify-center items-center`}
`

export const Title = styled.p`
  ${tw`text-xl`}
`
export const Text = styled.p`
  ${tw`text-left`}
`
