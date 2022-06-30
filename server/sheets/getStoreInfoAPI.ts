import { google } from 'googleapis'

export async function getStoreInfoAPI() {
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
      range: 'StoreInfo', // sheet name
    })

    const rows = response.data.values
    if (rows.length) {
      const result = rows.map((row) => ({
        nameTW: row[0],
        nameEN: row[1],
        shortIntro: row[2] ?? '',
        phone: row[3] ?? '',
        address: row[4] ?? '',
      }))
      result.splice(0, 1)
      return result
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
