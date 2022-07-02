import React from 'react'

import { StyledFooter, Container, InfoBox, Title, Text } from './styled'

type Props = {
  store: SheetGlobal.StoreInfo | null
}

const Footer = ({ store }: Props): JSX.Element => {
  const { nameTW, nameEN, shortIntro, phone, address } = store

  return (
    <StyledFooter>
      <Container>
        <InfoBox>
          <div>
            <Title>{nameEN}</Title>
            <Title>{nameTW}</Title>
          </div>
        </InfoBox>
        <InfoBox>
          <div>
            <Text>訂餐專線：{phone}</Text>
            <Text>地址：{address}</Text>
          </div>
        </InfoBox>
      </Container>
    </StyledFooter>
  )
}

export default Footer
