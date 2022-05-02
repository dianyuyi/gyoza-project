declare namespace SheetGlobal {
  interface MenuItem {
    id: number
    name: string
    note: string
    price: number
    image: string
  }
  type sheetName = string
  type MenuItems = Array<MenuItem>

  interface SheetState {
    sheetData: MenuItems | null
    isLoading: boolean
    errors: Errors
  }
}
