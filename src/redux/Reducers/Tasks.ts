/* eslint-disable sonarjs/no-duplicate-string */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import type { TaskFields, PopupTypes, Task } from '../../types';
import { LocalSaves } from '../../components/Classes/Saves';
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
      action: PayloadAction<{ bool: 0 | 1, type: PopupTypes }>,
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
  },
  extraReducers: (builder) => {
    builder.addCase(DatabaseThunk.criarTarefaThunk(false)
      .fulfilled, (state, action) => {
      try {
        state.tasks.push(action.payload);
        LocalSaves.localSave('Task', state);
      } catch {
        console.log('Parece que algo deu errado');
      }
    });

    builder.addCase(DatabaseThunk
      .alternarTarefaThunk(false).fulfilled, (state, _action) => {
      const findTask = state.tasks.findIndex(({ id }) => id === state.coockingTask.id);
      state.tasks[findTask].completed = !state.tasks[findTask].completed;
      LocalSaves.localSave('Task', state);
    });

    builder.addCase(
      DatabaseThunk.deletarTarefaThunk(false).fulfilled,
      (state, action) => {
        try {
          state.tasks = state.tasks
            .filter((task) => Number(task.id) !== Number(action.payload));
          LocalSaves.localSave('Task', state);
        } catch {
          console.log('Parece que algo deu errado');
        }
      },
    );
    builder.addCase(DatabaseThunk.todasTarefasThunk(false).fulfilled, (state, action) => {
      try {
        state.tasks = action.payload;
      } catch {
        console.log('Parece que algo deu errado');
      }
    });

    builder.addCase(DatabaseThunk
      .editarTarefaThunk(false).fulfilled, (state, _action) => {
      const findTask = state.tasks.findIndex(({ id }) => id === state.coockingTask.id);
      state.tasks[findTask] = state.coockingTask;
      LocalSaves.localSave('Task', state);
    });
  },
});

export const { makeTask, openEdit, resetCooking, viewTask } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
