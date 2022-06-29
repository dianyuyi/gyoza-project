import React from 'react'
import { Container, Box, Name, Price, Note } from './styled'

interface MenuItemProps {
  product: SheetGlobal.Product | null
}

export const MenuItem = ({ product }: MenuItemProps): JSX.Element => {
  return (
    <Container>
      <Box>
        <Name>{product.name}</Name>
        <Price>${product.price}</Price>
      </Box>
      <Box>
        <Note>{product.note}</Note>
      </Box>
    </Container>
  )
}
