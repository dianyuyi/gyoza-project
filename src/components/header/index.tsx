import React, { FC } from 'react'
import { Title } from './styled'

const Footer: FC = ({ children }) => {
  return (
    <div>
      <Title>Footer</Title>
      <main>{children}</main>
    </div>
  )
}

export default Footer
