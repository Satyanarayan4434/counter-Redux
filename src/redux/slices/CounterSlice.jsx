import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSclice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  }
});

export const { increment, decrement } = CounterSclice.actions

export default CounterSclice.reducer
