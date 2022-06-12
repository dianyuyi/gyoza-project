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

  interface CarouselItem {
    image: string
    alt: string
    url: string
    ga: string
    hide: boolean
  }
  type sheetName = string
  type MenuItems = Array<MenuItem>
  type ProductItems = Array<ProductItem>
  type CarouselItems = Arrray<CarouselItem>

  interface SheetState {
    sheetData: MenuItems | ProductItems | CarouselItem | null
    isLoading: boolean
    errors: Errors
  }
}
