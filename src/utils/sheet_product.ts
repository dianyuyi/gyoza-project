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
      const data = rows.map((row) => ({
        group: row[0],
        id: row[1],
        name: row[2] ?? '',
        note: row[3] ?? '',
        price: row[4] ?? 0,
        image: row[5] ?? '',
        description: row[6] ?? '',
      }))
      data.splice(0, 1)
      return data
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
