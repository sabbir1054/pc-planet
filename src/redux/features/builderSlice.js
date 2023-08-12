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
  selectedCategory: "",
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.selectedProducts[action.payload.key] = action.payload.data;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    removeFromBuilder: (state, action) => {
      state.selectedProducts = action.payload;
      state.selectedCategory = "";
    },
  },
});

export const { addToBuilder, selectCategory, removeFromBuilder } =
  builderSlice.actions;

export default builderSlice.reducer;
