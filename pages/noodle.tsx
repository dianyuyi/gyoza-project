import React from 'react'
import { NextPage } from 'next'
import Noodle from 'src/components/Noodle'
import { Title } from 'src/components/common'
import { getSheetList } from 'src/utils/sheet_2'

interface Props {
  sheetData: SheetGlobal.MenuItems | null
}

const NoodlePage: NextPage<Props> = ({ sheetData }) => {
  return (
    <div>
      <Title>麵類</Title>
      <Noodle sheetData={sheetData} />
    </div>
  )
}
export async function getStaticProps() {
  const sheetName = 'Noodle'
  const data = await getSheetList(sheetName)
  return {
    props: {
      sheetData: data, // remove sheet header
    },
  }
}
export default NoodlePage
