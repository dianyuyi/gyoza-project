import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// // Since we use typescript, lets utilize `useDispatch`
// export const useDispatch = () => useDispatchBase<AppDispatch>();

// // And utilize `useSelector`
// export const useSelector = <TSelected = unknown>(
//   selector: (state: RootState) => TSelected
// ): TSelected => useSelectorBase<RootState, TSelected>(selector);
