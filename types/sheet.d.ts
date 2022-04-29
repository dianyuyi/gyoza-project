declare namespace SheetGlobal {
  interface Work {
    id: number
    name_tw: string
    name_en: string
    image: string
    image_webp: string
    thumb: string
    tags: string
    date: string
    description_tw: string
    description_en: string
    url: string
  }
  type sheetName = string
  type Works = Array<Work>

  interface SheetState {
    sheetData: Works | null
    isLoading: boolean
    errors: Errors
  }
}
