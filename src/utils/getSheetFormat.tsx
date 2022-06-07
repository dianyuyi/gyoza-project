import React, { FC } from 'react'

interface SheetProps {
  sheetName?: string
  rows?: Array<any>
}
const getSheetFormat: FC<SheetProps> = ({ sheetName, rows }) => {
  let result = null
  switch (sheetName) {
    default: {
      return rows
    }
    case 'StoreInfo': {
      result = rows.map((row: Array<any>) => ({
        nameEng: row[0],
        nameTw: row[1],
        phone: row[2] ?? '',
        address: row[3] ?? '',
      }))
      return result.splice(0, 1)
    }
    case 'Products': {
      result = rows.map((row: Array<any>) => ({
        group: row[0],
        id: row[1],
        name: row[2] ?? '',
        note: row[3] ?? '',
        price: row[4] ?? 0,
        image: row[5] ?? '',
        description: row[6] ?? '',
      }))
      return result.splice(0, 1)
    }
  }
}

export default getSheetFormat
