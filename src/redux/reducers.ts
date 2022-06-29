import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import storeInfo from './sheet/storeInfoSlice'

// const reducers = combineReducers({
//   storeInfo,
// })

const combinedReducer = combineReducers({
  storeInfo,
})

const rootReducers = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export default rootReducers
