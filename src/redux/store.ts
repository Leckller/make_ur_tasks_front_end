import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './Reducers/Tasks';
import UserReducer from './Reducers/User';
import ErrorsReducer from './Reducers/Errors';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    { serializableCheck: false },
  ),
  reducer: {
    Task: TaskReducer,
    User: UserReducer,
    Errors: ErrorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
