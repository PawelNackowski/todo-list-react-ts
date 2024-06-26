import {
  takeEvery,
  call,
  put,
  takeLatest,
  delay,
  select,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorege } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  selectTasks,
} from "./tasksSlice";
import { Task } from "../../types";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exmapleTasks: Task[] = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exmapleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "coś poszło nie tak");
  }
}

function* saveTasksInLocalStoregeHandler() {
  const tasks: Task[] = yield select(selectTasks);
  yield call(saveTasksInLocalStorege, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStoregeHandler);
}
