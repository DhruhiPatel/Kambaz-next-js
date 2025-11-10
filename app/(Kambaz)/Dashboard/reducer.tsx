import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import * as db from "../Database"; 

export interface Enrollment {
  _id: string;
  user: string;   
  course: string; 
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: db.enrollments as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }: { payload: { userId: string; courseId: string } }) => {
      const exists = state.enrollments.some(
        (e) => e.user === payload.userId && e.course === payload.courseId
      );
      if (!exists) {
        state.enrollments.push({
          _id: uuidv4(),
          user: payload.userId,
          course: payload.courseId,
        });
      }
    },
    unenrollCourse: (state, { payload }: { payload: { userId: string; courseId: string } }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === payload.userId && e.course === payload.courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
