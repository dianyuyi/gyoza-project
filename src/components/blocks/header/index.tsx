import React from 'react'
import Sidenav from 'src/components/sidenav'

type Props = {
  pageType: string
}

const Header = ({ pageType }: Props): JSX.Element => {
  return <header>{pageType !== '菜單' ? <Sidenav /> : null}</header>
}

export default Header
