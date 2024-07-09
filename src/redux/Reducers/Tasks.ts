import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import type { TaskFields, PopupTypes, Task } from '../../types';
import { LocalSaves } from '../../components/Classes/Saves';
import { DataBase } from '../../service/Server';
import TaskClass from '../../components/Classes/TaskClass';

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

// const fetchTeste = createAsyncThunk({});

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
    addTask: (state, action: PayloadAction<string>) => {
      const { deadline, description, taskName } = state.coockingTask;
      const newTask = new TaskClass(state.nextId, taskName, description, deadline);

      const user = action.payload;
      if (user) {
        DataBase.criarTarefa(newTask).then((response) => {
          state.tasks.push(response.data);
          alert(response.message);
        });
      } else {
        state.tasks.push(newTask);
        state.nextId += 1;
      }
      LocalSaves.localSave('Task', state);
    },
    viewTask: (state, action: PayloadAction<Task>) => {
      state.coockingTask = action.payload;
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks
        .filter((task) => Number(task.id) !== Number(action.payload.id));
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
});

export const { editTask, deleteTask, makeTask, toggleTask,
  addTask, openEdit, resetCooking, viewTask } = TaskSlice.actions;

export const selectCount = (state: RootState) => state.Task;

export default TaskSlice.reducer;
