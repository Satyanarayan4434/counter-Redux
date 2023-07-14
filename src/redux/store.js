import { configureStore } from '@reduxjs/toolkit'
import { CounterSclice } from './slices/CounterSlice'

export const store = configureStore({
  reducer: { 
    counter: CounterSclice
  },
})

