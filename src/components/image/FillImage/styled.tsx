import tw, { styled, css } from 'twin.macro'

interface Props {
  width: number | string
  height: number | string
}
export const Box = styled.div(({ width, height }: Props) => [
  tw`relative w-auto h-auto`,
  width &&
    css`
      width: ${width};
    `,
  height &&
    css`
      height: ${height};
    `,
])
