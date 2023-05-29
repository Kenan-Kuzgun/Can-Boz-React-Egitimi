import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },

    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeDescription, changeCost } = formSlice.actions;
