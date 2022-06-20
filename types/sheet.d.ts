declare namespace SheetGlobal {
  interface StoreInfo {
    nameTW: string
    nameEN: string
    shortIntro: string | null
    phone: string
    address: string
  }

  interface Product {
    group: string
    id: string
    name: string
    note: string
    price: number
    image: string
    description: string
    hot: string
  }

  interface HomeImage {
    leftTop: string
    leftRight: string
    centerFront: string
    centerBackground: string
    bottomLeft: string
    bottomRight: string
  }

  type sheetName = string
  type StoreInfos = Array<StoreInfo>
  type Products = Array<Product>
  type HomeImages = Arrray<HomeImage>

  interface SheetState {
    sheetData: StoreInfos | Products | HomeImages | null
    isLoading: boolean
    errors: Errors
  }
}
