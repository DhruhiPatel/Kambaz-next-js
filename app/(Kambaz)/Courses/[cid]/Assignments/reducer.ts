"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Assignment = {
  _id: string;
  title: string;
  description: string;
  points: number;
  due: string;
  available: string;
  course: string;
  until?: string;
  editing?: boolean;
};

type AssignmentsState = {
  assignments: Assignment[];
};

// ⭐ NOW assignments start empty - they will be loaded from the server
const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // ⭐ NEW
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload);
    },

    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== action.payload
      );
    },

    editAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload ? { ...a, editing: true } : a
      );
    },

    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id
          ? { ...action.payload, editing: false }
          : a
      );
    },

    cancelEdit: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload ? { ...a, editing: false } : a
      );
    },
  },
});

// ⭐ EXPORT setAssignments so client code can import it
export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  editAssignment,
  updateAssignment,
  cancelEdit,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
