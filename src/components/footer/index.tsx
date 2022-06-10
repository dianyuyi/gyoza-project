import React, { FC } from 'react'
import { Title } from './styled'

const Header: FC = ({ children }) => {
  return (
    <div>
      <Title>Header</Title>
      <main>{children}</main>
    </div>
  )
}

export default Header
