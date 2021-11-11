import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const totalInputsSlice = createSlice({
  name: "totalInputs",
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      state.value.push(1);
    },
  },
});
export const inputVals = createSlice({
  name: "inputs",
  initialState: {
    value: [],
  },
  reducers: {
    addText: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { increment } = totalInputsSlice.actions;
export const { addText } = inputVals.actions;

export const store = configureStore({
  reducer: {
    totalInput: totalInputsSlice.reducer,
    inputs: inputVals.reducer,
  },
});
