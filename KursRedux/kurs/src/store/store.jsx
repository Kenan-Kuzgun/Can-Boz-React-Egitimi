import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    course: courseReducer,
  },
});
