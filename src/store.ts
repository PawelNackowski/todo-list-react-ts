import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tasksReducer from "./features/TasksPages/Tasks/tasksSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./features/TasksPages/Tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
