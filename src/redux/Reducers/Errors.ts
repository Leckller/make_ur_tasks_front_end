import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ErrorState {
  errors: ResponseType[]
}

const initialState: ErrorState = {
  errors: [],
};

export const ErrorsSlice = createSlice({
  name: 'Errors',
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<ResponseType>) => {
      state.errors.push(action.payload);
    },
  },
});
export const { addError } = ErrorsSlice.actions;

export default ErrorsSlice.reducer;
