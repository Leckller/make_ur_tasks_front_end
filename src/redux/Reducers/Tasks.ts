import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { TaskWithNoId, Task, TaskFields } from '../../types';

interface TaskState {
  tasks: Task[],
  coockingTask: TaskWithNoId
}

const initialState: TaskState = {
  tasks: [],
  coockingTask: {
    checks: [],
    completed: false,
    deadline: new Date(),
    description: '',
    taskName: '',
    userId: 1,
  },
};

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    makeTask: (state, action: PayloadAction<{ field: TaskFields, value: any }>) => {
      const { field, value } = action.payload;
      state.coockingTask[field] = value as never;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { makeTask, addTask } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
