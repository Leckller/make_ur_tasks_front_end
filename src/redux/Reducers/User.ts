import { createSlice } from '@reduxjs/toolkit';
import { LocalSaves } from '../../components/Classes/Saves';

interface UserState {
  id: number,
  email: string,
  password: string,
}

const initialState: UserState = LocalSaves.localGet('User')
  ? LocalSaves.localGet('User') : {
    token: '',
    name: '',
  };

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser,
  },
});
