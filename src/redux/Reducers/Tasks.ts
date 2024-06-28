import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { TaskWithNoId, Task, TaskFields, PopupTypes } from '../../types';

interface TaskState {
  tasks: Task[],
  edit: { bool: boolean, type: PopupTypes },
  coockingTask: TaskWithNoId
}

const initialState: TaskState = {
  tasks: [],
  edit: { bool: false, type: 'view' },
  coockingTask: {
    checks: [],
    completed: false,
    deadline: '11/02/2005' as unknown as Date,
    description: '',
    taskName: '',
    userId: 1,
  },
};

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    openEdit: (
      state,
      action: PayloadAction< { bool?: 0 | 1, type: PopupTypes }>,
    ) => {
      state.edit.type = action.payload.type;
      switch (action.payload.bool) {
        case 0: state.edit.bool = false;
          return;
        case 1: state.edit.bool = true;
          return;
        default: state.edit.bool = !state.edit;
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
