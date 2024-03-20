import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTasks: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: findId }) => {
      const index = tasks.findIndex(({ id }) => id === findId);
      tasks.splice(index, 1);
    },
    setAlldone: ({ tasks }) => {
      tasks.forEach((task) => task.done = true);
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.loading = false;
      state.tasks = tasks;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    }
  }
});

export const {
  addTasks,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAlldone,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectLoading = (state) => selectTasksState(state).loading;
export const selectAreEpmtyTask = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId)

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;