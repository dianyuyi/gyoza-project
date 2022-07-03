import React, { Fragment, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import Footer from 'src/components/blocks/footer'
import { MenuItem } from 'src/components/item'
import {
  Block,
  PrintButton,
  PrintWrapper,
  GridContainer,
  MenuTitle,
  GroupTitle,
  GroupBox,
  PrintFooter,
} from './styled'

interface HotProductsProps {
  products: SheetGlobal.Products | null
  store: SheetGlobal.StoreInfo | null
}

type groupArray = [title: string, items: SheetGlobal.Products]

const Menu = ({ products, store }: HotProductsProps): JSX.Element => {
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
    <Fragment>
      <PrintButton onClick={handlePrint}>列印菜單</PrintButton>
      <PrintWrapper ref={componentRef}>
        <Block>
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
        <PrintFooter>
          <Footer store={store} />
        </PrintFooter>
      </PrintWrapper>
    </Fragment>
  )
}

export default Menu
