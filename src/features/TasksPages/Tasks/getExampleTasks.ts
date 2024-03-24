import axios from "axios";

export const getExampleTasks = () =>
  axios<string[]>("/todo-list-react-ts/exampleTasks.json").then((response) => response.data);