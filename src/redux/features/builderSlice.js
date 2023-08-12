import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: {
    cpu: null,
    ram: null,
    monitor: null,
    storage: null,
    motherboard: null,
    powerSupply: null,
    others: null,
  },
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.selectedProducts[action.payload.key] = action.payload.data;
    },
    removeFromBuilder: (state, action) => {
      state.selectedProducts = action.payload;
    },
  },
});

export const { addToBuilder, removeFromBuilder } =
  builderSlice.actions;

export default builderSlice.reducer;
