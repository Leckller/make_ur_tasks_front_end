import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './Reducers/Tasks';
import UserReducer from './Reducers/User';

export const store = configureStore({
  reducer: {
    Task: TaskReducer,
    User: UserReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
