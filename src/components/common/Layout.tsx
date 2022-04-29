import React, { FC } from 'react'
import Meta from './Meta'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Meta title="" keywords="" description="" />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
