import { google } from 'googleapis'

export async function getProductsAPI() {
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
      range: 'Products', // sheet name
    })

    const rows = response.data.values
    if (rows.length) {
      const result = rows.map((row) => ({
        groupTW: row[0] ?? '',
        groupEN: row[1] ?? '',
        id: row[2] ?? '',
        name: row[3] ?? '',
        note: row[4] ?? '',
        price: row[5] ?? 0,
        image: row[6] ?? '',
        description: row[7] ?? '',
        hot: row[8].toLowerCase() ?? 'false',
      }))
      result.splice(0, 1)
      return result
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
