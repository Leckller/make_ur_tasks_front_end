import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalSaves } from '../../components/Classes/Saves';
import { DataBase } from '../../service/Server';

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
  reducers: {
    setUser: (state, action:PayloadAction<string>) => {
      state.token = `Bearer: ${action.payload}`;
      DataBase.auth = `Bearer: ${action.payload}`;
      LocalSaves.localSave('User', state);
    },
  },
});
export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
