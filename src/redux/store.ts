import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch as useDispatchBase, useSelector as useSelectorBase } from 'react-redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import rootReducers from './reducers'

export const store = configureStore({
  reducer: rootReducers,
})

const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: true,
  })

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>()

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector)

export const wrapper = createWrapper(makeStore, {
  debug: true,
})
