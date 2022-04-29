import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Card } from 'antd'

const Intro = styled.div`
  font-size: 16px;
`

const CardContainer = styled(Card)`
  width: 400px;
  margin: 20px auto;
  text-align: left;
`

const Item = styled.div`
  margin: 10px 0;
`

interface Props {
  itemData: ItemGlobal.Item | null
  isLoading: boolean
}

const ItemDetail: FC<Props> = ({ itemData, isLoading }) => {
  const { t } = useTranslation()

  return (
    <>
      <Intro>{t('user.intro')}</Intro>
      <CardContainer title={t('user.info')} loading={isLoading}>
        <Item>
          {t('user.id')}：{itemData?.id}
        </Item>
        <Item>
          {t('user.name')}：{itemData?.name}
        </Item>
        <Item>
          {t('user.description')}：{itemData?.description}
        </Item>
      </CardContainer>
    </>
  )
}

export default ItemDetail
