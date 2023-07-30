import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from './messageThunk';

const initialState = {
  message: {},
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.message = action.payload;
      });
  },
});

export default messageSlice.reducer;
