import React from 'react'
import { NextPage } from 'next'
import Gyoza from 'src/components/Gyoza'
import { Title } from 'src/components/common'
import { getSheetList } from 'src/utils/sheet_2'

interface Props {
  sheetData: SheetGlobal.MenuItems | null
}

const GyozaPage: NextPage<Props> = ({ sheetData }) => {
  return (
    <div>
      <Title>餃子</Title>
      <Gyoza sheetData={sheetData} />
    </div>
  )
}

export async function getStaticProps() {
  const sheetName = 'Gyoza'
  const data = await getSheetList(sheetName)
  return {
    props: {
      sheetData: data, // remove sheet header
    },
  }
}
export default GyozaPage
