import { Task } from "../../types";

const localStorageKey = "tasks";

export const saveTasksInLocalStorege = (tasks: Task[]) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem(localStorageKey);
  return storedTasks ? (JSON.parse(storedTasks) as Task[]) : [];
};
