import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalSaves } from '../../components/Classes/Saves';

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
      state.token = action.payload;
    },
  },
});
export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;
