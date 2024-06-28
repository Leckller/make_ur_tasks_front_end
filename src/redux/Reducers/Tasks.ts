import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { TaskWithNoId, TaskFields, PopupTypes } from '../../types';
import TaskClass from '../../components/Classes/TaskClass';

interface TaskState {
  tasks: TaskWithNoId[],
  edit: { bool: boolean, type: PopupTypes },
  coockingTask: TaskWithNoId,
}

const saveExists = localStorage.getItem('Task');

const initialState: TaskState = saveExists ? JSON.parse(saveExists) : {
  tasks: [],
  edit: { bool: false, type: 'view' },
  coockingTask: new TaskClass(),
};

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    openEdit: (
      state,
      action: PayloadAction< { bool: 0 | 1, type: PopupTypes }>,
    ) => {
      const { type, bool } = action.payload;
      state.edit.type = type;
      state.edit.bool = bool !== 0;
    },
    makeTask: (state, action: PayloadAction<{ field: TaskFields, value: any }>) => {
      console.log(action.payload);
      const { field, value } = action.payload;
      state.coockingTask[field] = value as never;
    },
    resetCooking: (state) => {
      state.coockingTask = new TaskClass();
    },
    addTask: (state, action: PayloadAction<TaskWithNoId>) => {
      state.tasks.push(action.payload);
      localStorage.setItem('Task', JSON.stringify(state));
    },
    viewTask: (state, action: PayloadAction<TaskWithNoId>) => {
      state.coockingTask = action.payload;
    },
  },
});

export const { makeTask, addTask, openEdit, resetCooking, viewTask } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
