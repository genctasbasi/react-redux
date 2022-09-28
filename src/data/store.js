import { configureStore } from "@reduxjs/toolkit";
import { shapeSlice, numberSlice, colourSlice } from "../components/Manager";

const store = configureStore({
  reducer: {
    colours: colourSlice.reducer,
    shapes: shapeSlice.reducer,
    numbers: numberSlice.reducer,
  },
});

export default store;
