import { createSlice } from "@reduxjs/toolkit";

const _colourSlice = createSlice({
  name: "colours",
  initialState: {
    type: "colour",
    colour: "Red",
  },
  reducers: {
    setColour(state, action) {
      state.colour = action.payload.colour;
    },
  },
});

const _numberSlice = createSlice({
  name: "numbers",
  initialState: {
    type: "number",
    number: "One",
  },
  reducers: {
    setNumber(state, action) {
      state.number = action.payload.number;
    },
  },
});

const _shapeSlice = createSlice({
  name: "shapes",
  initialState: {
    type: "shape",
    shape: "Square",
  },
  reducers: {
    setShape(state, action) {
      state.shape = action.payload.shape;
    },
  },
});

export const numberActions = _numberSlice.actions;
export const numberSlice = _numberSlice;

export const colourSlice = _colourSlice;
export const colourActions = _colourSlice.actions;

export const shapeActions = _shapeSlice.actions;
export const shapeSlice = _shapeSlice;
