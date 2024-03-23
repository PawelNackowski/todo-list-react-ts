import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { RootState } from "../../../store";
import { Task } from "../../types";

interface TasksState {
  tasks: Task[];
  hideDone: boolean;
  loading: boolean;
}

const initialState: TasksState = {
  tasks: getTasksFromLocalStorage(),
  hideDone: false,
  loading: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex(({ id }) => id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex(({ id }) => id === action.payload);
      state.tasks.splice(index, 1);
    },
    setAllDone: (state) => {
      state.tasks.forEach((task) => (task.done = true));
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
})!;

export const {
  addTasks,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state: RootState) => state.tasks;
export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) =>
  selectTasksState(state).hideDone;
export const selectLoading = (state: RootState) =>
  selectTasksState(state).loading;
export const selectAreEmptyTask = (state: RootState) =>
  selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state: RootState) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state: RootState, taskId: string) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state: RootState, query: string) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content!.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
