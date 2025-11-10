"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database"; // ✅ Import mock data (enrollments, users, etc.)

// ✅ Define a user type
export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email?: string;
  dob?: string;
  role?: string; //"USER" | "ADMIN" | "FACULTY" | "STUDENT" | "TA";
  enrolledCourses?: string[];
  [key: string]: unknown; // Allow flexible extra fields if needed
};

// ✅ Enrollment record type
type Enrollment = {
  _id: string;
  user: string;
  course: string;
  role: string;
};

// ✅ Define the slice state
type AccountState = {
  currentUser: User | null;
};

// ✅ Initial state
const initialState: AccountState = {
  currentUser: null,
};

// ✅ Create slice
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    /**
     * Sets the current user and attaches their enrolled courses
     * (automatically retrieved from db.enrollments).
     */
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      const user = action.payload;

      if (user && user.role) {
        const role = user.role.toUpperCase();

        // ✅ If the user is a student, faculty, or TA, load their course enrollments
        if (["STUDENT", "FACULTY", "TA"].includes(role)) {
          const enrollments = db.enrollments as Enrollment[];
          const enrolled = enrollments
            .filter((e) => e.user === user._id)
            .map((e) => e.course);

          user.enrolledCourses = enrolled;
          console.log(`✅ Enrolled courses for ${user.username}:`, enrolled);
        } else {
          console.log("ℹ️ No enrolled courses added — role:", user.role);
        }
      }

      state.currentUser = user;
    },

    /**
     * Adds a course ID to the user's enrolledCourses array.
     */
    enrollCourse: (state, action: PayloadAction<string>) => {
      if (state.currentUser) {
        const enrolled = state.currentUser.enrolledCourses || [];
        if (!enrolled.includes(action.payload)) {
          state.currentUser.enrolledCourses = [...enrolled, action.payload];
        }
      }
    },

    /**
     * Removes a course ID from the user's enrolledCourses array.
     */
    unenrollCourse: (state, action: PayloadAction<string>) => {
      if (state.currentUser) {
        state.currentUser.enrolledCourses = (
          state.currentUser.enrolledCourses || []
        ).filter((cid) => cid !== action.payload);
      }
    },
  },
});

// ✅ Export actions and reducer
export const { setCurrentUser, enrollCourse, unenrollCourse } =
  accountSlice.actions;
export default accountSlice.reducer;
