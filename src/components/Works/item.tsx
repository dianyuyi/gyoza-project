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

// const Item = styled.div`
//   margin: 10px 0;
// `

// interface Props {
//   sheetData: SheetGlobal.Works | null
//   isLoading: boolean
// }

// const WorksDetail: FC<Props> = ({ sheetData, isLoading }) => {
const WorksDetail: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Intro>{t('user.intro')}</Intro>
      <CardContainer title={t('user.info')} loading={false}>
        {/* {sheetData.map(row => {
          return (
            <div key={row.id}>
              <Item>
                {t('id')}：{row.id}
              </Item>
              <Item>
                {t('name')}：{row.name_tw}
              </Item>
              <Item>
                {t('name')}：{row?.image_webp ?? 'none'}
              </Item>
              <Item>
                {t('name')}：{row.thumb}
              </Item>
              <Item>
                {t('tags')}：{row.tags}
              </Item>
              <Item>
                {t('date')}：{row.date}
              </Item>
              <Item>
                {t('description_tw')}：{row.description_tw}
              </Item>
              <Item>
                {t('description_en')}：{row.description_en}
              </Item>
              <Item>
                {t('url')}：{row.url}
              </Item>
            </div>
          )
        })} */}
      </CardContainer>
    </>
  )
}

export default WorksDetail
