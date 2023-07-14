import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/CounterSclices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})