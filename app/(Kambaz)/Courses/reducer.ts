import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Courses } from "./types";
import * as db from "../Database";
 
interface CoursesState {
  courses: Courses[];
}
 
const initialState: CoursesState = { courses: db.courses };
 
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload }: PayloadAction<Courses>) => {
      state.courses.push(payload); // no cast needed
    },
    deleteCourse: (state, { payload }: PayloadAction<string>) => {
      state.courses = state.courses.filter((c) => c._id !== payload);
    },
    updateCourse: (state, { payload }: PayloadAction<Courses>) => {
      const i = state.courses.findIndex((c) => c._id === payload._id);
      if (i !== -1) state.courses[i] = payload;
    },
    setCourses: (state, { payload }: PayloadAction<Courses[]>) => {
      state.courses = payload;
    },
  },
});
 
export const { addNewCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;