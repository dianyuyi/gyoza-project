import { google } from 'googleapis'

export async function getSheetList(sheetName: string) {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: sheetName, // sheet name
    })

    const rows = response.data.values
    if (rows.length) {
      return rows.map(row => ({
        id: row[0],
        name_tw: row[1],
        name_en: row[2],
        image: row[3],
        image_webp: row[4] ?? '',
        thumb: row[5] ?? '',
        tags: row[6],
        date: row[7],
        description_tw: row[8],
        description_en: row[9],
        url: row[10] ?? '',
      }))
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
