declare namespace SheetGlobal {
  interface MenuItem {
    id: number
    name: string
    note: string
    price: number
    image: string
  }

  interface ProductItem {
    group: string
    id: string
    name: string
    note: string
    price: number
    image: string
    description: string
  }
  type sheetName = string
  type MenuItems = Array<MenuItem>
  type ProductItems = Array<ProductItem>

  interface SheetState {
    sheetData: MenuItems | ProductItems | null
    isLoading: boolean
    errors: Errors
  }
}
