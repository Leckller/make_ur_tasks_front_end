import { createSlice } from '@reduxjs/toolkit';
import { LocalSaves } from '../../components/Classes/Saves';
import { DataBase } from '../../service/Server';
import { DatabaseThunk } from './Server';

interface UserState {
  token: string,
}

const initialState: UserState = LocalSaves.localGet('User')
  ? LocalSaves.localGet('User') : {
    token: '',
  };

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(DatabaseThunk.cadastroThunk().fulfilled, (state, action) => {
      state.token = `Bearer: ${action.payload}`;
      DataBase.auth = `Bearer: ${action.payload}`;
      LocalSaves.localSave('User', state);
      LocalSaves.deleteSave('Task');
    });
    builder.addCase(DatabaseThunk.loginThunk().fulfilled, (state, action) => {
      state.token = `Bearer: ${action.payload}`;
      DataBase.auth = `Bearer: ${action.payload}`;
      LocalSaves.localSave('User', state);
      LocalSaves.deleteSave('Task');
    });
  },
});

export default UserSlice.reducer;
