import builderReducer from "@/redux/features/builderSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

export default store;
