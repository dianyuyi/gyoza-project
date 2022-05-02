import React, { FC } from 'react'
import GyozaDetail from './item'
import LinkButton from 'src/components/common/LinkButton'

interface Props {
  sheetData: SheetGlobal.MenuItems | null
}

const Gyoza: FC<Props> = ({ sheetData }) => {
  return (
    <>
      <GyozaDetail sheetData={sheetData} />
      <LinkButton href="/">Back</LinkButton>
    </>
  )
}
export default Gyoza
