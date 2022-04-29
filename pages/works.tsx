import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import Works from 'src/components/Works'
import { Title } from 'src/components/common'
import { getSheetList } from 'src/utils/sheet'

const UserPage: NextPage = ({ sheetData }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Title>{t('user.title')}</Title>
      <Works sheetData={sheetData} />
    </div>
  )
}

export async function getStaticProps() {
  const sheetName = 'Sheet1'
  const data = await getSheetList(sheetName)
  return {
    props: {
      sheetData: data, // remove sheet header
    },
  }
}
export default UserPage
