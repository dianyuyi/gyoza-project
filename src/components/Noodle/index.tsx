import React, { FC } from 'react'
import NoodleDetail from './item'
import LinkButton from 'src/components/common/LinkButton'

interface Props {
  sheetData: SheetGlobal.MenuItems | null
}

const Noodle: FC<Props> = ({ sheetData }) => {
  return (
    <>
      <NoodleDetail sheetData={sheetData} />
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}
export default Noodle
