import React from 'react'

import { MenuItem } from 'src/components/item'
import { Block, GridContainer, GroupTitle, GroupBox } from './styled'

interface HotProductsProps {
  products: SheetGlobal.Products | null
}

type groupArray = [title: string, items: SheetGlobal.Products]

const Menu = ({ products }: HotProductsProps): JSX.Element => {
  const categories = {}
  const translateKeys = {
    gyoza: '水餃',
    noodle: '拌麵',
    wonton: '餛飩',
    soup: '湯品',
    toast: '厚片吐司',
    hotDrink: '熱飲',
    iceDrink: '冷飲',
  }

  products.forEach((product) => {
    const key = product.group
    if (!categories[product.group]) {
      categories[key] = []
    }
    categories[key].push(product)
  })

  return (
    <Block>
      <GridContainer>
        {Object.entries(categories).map((menuGroup: groupArray) => {
          const [title, items] = menuGroup
          return (
            <GroupBox key={title}>
              <GroupTitle>{translateKeys[title]}</GroupTitle>
              {items.map((product, index) => (
                <MenuItem key={index} product={product} />
              ))}
            </GroupBox>
          )
        })}
      </GridContainer>
    </Block>
  )
}

export default Menu
