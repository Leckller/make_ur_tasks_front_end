import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { TaskWithNoId, Task, TaskFields } from '../../types';

interface TaskState {
  tasks: Task[],
  edit: boolean,
  coockingTask: TaskWithNoId
}

const initialState: TaskState = {
  tasks: [],
  edit: false,
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
    openEdit: (state, action: PayloadAction<0 | 1 | void>) => {
      switch (action.payload) {
        case 0: state.edit = false; return;
        case 1: state.edit = true; return;
        default: state.edit = !state.edit;
      }
    },
    makeTask: (state, action: PayloadAction<{ field: TaskFields, value: any }>) => {
      const { field, value } = action.payload;
      state.coockingTask[field] = value as never;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { makeTask, addTask, openEdit } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
