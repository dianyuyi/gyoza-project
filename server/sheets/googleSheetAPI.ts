import { google } from 'googleapis'
import getSheetFormat from 'src/utils/getSheetFormat'

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
      const data = getSheetFormat({ sheetName, rows })

      return data
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
