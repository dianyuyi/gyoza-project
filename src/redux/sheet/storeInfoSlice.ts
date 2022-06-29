import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { getSheetList } from 'server/sheets/googleSheetAPI'

const initialState: SheetGlobal.StoreInfos = [
  {
    nameTW: '',
    nameEN: '',
    shortIntro: '',
    phone: '',
    address: '',
  },
]

const storeInfoSlice = createSlice({
  name: 'storeInfoSheet',
  initialState,
  reducers: {
    setStoreInfo: (state, action: PayloadAction<typeof initialState>) => {
      state = action.payload
    },
    // getStoreInfo: (state, action: PayloadAction<typeof initialState>) => {
    //   return action.payload
    // },
    resetStoreInfo: (state, action: PayloadAction<typeof initialState>) => {
      return initialState
    },
  },
})

// export const getStoreInfo = async (state: { storeInfo: SheetGlobal.StoreInfos }) => {
//   const res = await getSheetList('StoreInfo')
//   state.storeInfo = res
// }

export const { setStoreInfo, resetStoreInfo } = storeInfoSlice.actions

export default storeInfoSlice.reducer
