import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import Item from 'src/components/Item'
import { Title } from 'src/components/common'

const UserPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Title>{t('user.title')}</Title>
      <Item />
    </div>
  )
}
export default UserPage
