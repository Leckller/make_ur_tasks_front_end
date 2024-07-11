import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import type { TaskFields, PopupTypes, Task } from '../../types';
import { LocalSaves } from '../../components/Classes/Saves';
import { DataBase } from '../../service/Server';
import TaskClass from '../../components/Classes/TaskClass';
import { DatabaseThunk } from './Server';

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
    coockingTask: {},
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
      LocalSaves.localSave('Task', state);
    },
    makeTask: (state, action: PayloadAction<{ field: TaskFields, value: any }>) => {
      const { field, value } = action.payload;
      state.coockingTask[field] = value as never;
      LocalSaves.localSave('Task', state);
    },
    resetCooking: (state) => {
      state.coockingTask = new TaskClass();
    },
    viewTask: (state, action: PayloadAction<Task>) => {
      state.coockingTask = action.payload;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks
        .filter((task) => Number(task.id) !== Number(action.payload));
      DataBase.deletarTarefa(action.payload).then((response) => {
        alert(response.message);
      });
      LocalSaves.localSave('Task', state);
    },
    toggleTask: (state, action:PayloadAction<Task>) => {
      const findTask = state.tasks.findIndex(({ id }) => id === action.payload.id);
      state.tasks[findTask].completed = !state.tasks[findTask].completed;
      LocalSaves.localSave('Task', state);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const findTask = state.tasks.findIndex(({ id }) => id === action.payload.id);
      state.tasks[findTask] = action.payload;
      LocalSaves.localSave('Task', state);
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(DatabaseThunk.cadastroThunk(), (state, action) => {
    //   state.tasks = action.payload.data;
    //   LocalSaves.localSave('Task', state);
    // });
    builder.addCase(DatabaseThunk.criarTarefaThunk(false).fulfilled, (state, action) => {
      try {
        state.tasks.push(action.payload);
        LocalSaves.localSave('Task', state);
      } catch {
        console.log('Parece que algo deu errado');
      }
    });
  },
});

export const { editTask, deleteTask, makeTask, toggleTask,
  openEdit, resetCooking, viewTask } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
