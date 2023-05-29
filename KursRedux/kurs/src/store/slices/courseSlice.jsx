import { createSlice, nanoid } from "@reduxjs/toolkit";
const courseSlice = createSlice({
  name: "form",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
  },
});
export const { addCourse } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
