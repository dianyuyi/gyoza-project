import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { MenuItem } from 'src/components/item'
import { Block, PrintButton, GridContainer, MenuTitle, GroupTitle, GroupBox } from './styled'

interface HotProductsProps {
  products: SheetGlobal.Products | null
}

type groupArray = [title: string, items: SheetGlobal.Products]

const Menu = ({ products }: HotProductsProps): JSX.Element => {
  const componentRef = useRef<HTMLDivElement | null>(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const categories = {}
  products.forEach((product) => {
    const key = product.groupTW
    if (!categories[product.groupTW]) {
      categories[key] = []
    }
    categories[key].push(product)
  })

  return (
    <>
      <PrintButton onClick={handlePrint}>列印菜單</PrintButton>
      <Block ref={componentRef}>
        <MenuTitle>Menu</MenuTitle>
        <GridContainer>
          {Object.entries(categories).map((menuGroup: groupArray) => {
            const [title, items] = menuGroup
            return (
              <GroupBox key={title}>
                <GroupTitle>{title}</GroupTitle>
                {items.map((product, index) => (
                  <MenuItem key={index} product={product} />
                ))}
              </GroupBox>
            )
          })}
        </GridContainer>
      </Block>
    </>
  )
}

export default Menu
