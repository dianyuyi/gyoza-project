import React, { FC } from 'react'
import { styled } from 'twin.macro'
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
  sheetData: SheetGlobal.MenuItems | null
}

const NoodleDetail: FC<Props> = ({ sheetData }) => {
  return (
    <>
      <Intro>麵食</Intro>
      <CardContainer title="麵食菜單" loading={false}>
        {sheetData.map((row) => {
          return (
            <div key={row.id}>
              <Item>{row.id}</Item>
              <Item>{row.name}</Item>
              <Item>{row.note ?? 'none'}</Item>
              <Item>{row.price}</Item>
              <Item>{row.image}</Item>
            </div>
          )
        })}
      </CardContainer>
    </>
  )
}

export default NoodleDetail
