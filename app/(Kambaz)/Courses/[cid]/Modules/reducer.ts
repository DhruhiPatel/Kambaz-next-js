import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
import {Module} from "./types";
const initialState: {modules: Module[]} = {
  modules: modules,
};
// type LessonType = {
//     _id: string,
//     module: string
// }
// type ModuleType = {
//     _id: string,
//     name: string,
//     course: string,
//     lessons: LessonType[]
// }
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
     setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, { payload: module }) => {
      const newModule: Module = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        description: "",
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as Module[];
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: Module) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === module._id ? module : m
      ) as Module[];
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: Module) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as Module[];
    },
  },
});
export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
