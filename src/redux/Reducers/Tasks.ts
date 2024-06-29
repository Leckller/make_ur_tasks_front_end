import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { TaskFields, PopupTypes, Task, User } from '../../types';
import TaskClass from '../../components/Classes/TaskClass';
import { LocalSaves } from '../../components/Classes/Saves';
import { DataBase } from '../../service/Server';

interface TaskState {
  tasks: Task[],
  nextId: number,
  edit: { bool: boolean, type: PopupTypes },
  coockingTask: Task,
}

const initialState: TaskState = LocalSaves.localGet('Task')
  ? LocalSaves.localGet('Task') : {
    tasks: [],
    nextId: 1,
    edit: { bool: false, type: 'view' },
    coockingTask: new TaskClass(0),
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
      const { field, value } = action.payload;
      state.coockingTask[field] = value as never;
    },
    resetCooking: (state) => {
      state.coockingTask = new TaskClass(999999);
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const newTask = action.payload;
      newTask.id = state.nextId;

      const user: User | null = LocalSaves.localGet('User');
      if (user) {
        DataBase.criarTarefa(newTask).then((response) => {
          alert(response);
        });
      }

      state.tasks.push(newTask);
      state.nextId += 1;
      localStorage.setItem('Task', JSON.stringify(state));
    },
    viewTask: (state, action: PayloadAction<Task>) => {
      state.coockingTask = action.payload;
    },
  },
});

export const { makeTask, addTask, openEdit, resetCooking, viewTask } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
