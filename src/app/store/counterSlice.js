// store/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    addedItems: [],
    Total: 0,

  },
  reducers: {

    addCart: (state, action) => {
      state.addedItems.push(action?.payload)
    },
    grandTotal: (state, action) => {
      state.Total += action.payload;
    },

  },
});

export const { increment, decrement, addCart, grandTotal } = counterSlice.actions;
export default counterSlice.reducer;
