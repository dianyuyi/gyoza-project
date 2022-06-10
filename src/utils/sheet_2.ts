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
      spreadsheetId: process.env.SPREADSHEET_ID_2,
      range: sheetName, // sheet name
    })

    const rows = response.data.values
    if (rows.length) {
      return rows.map((row) => ({
        id: row[0],
        name: row[1],
        note: row[2] ?? '',
        price: row[3],
        image: row[4] ?? '',
      }))
    }
  } catch (err) {
    console.log(err)
  }
  return []
}