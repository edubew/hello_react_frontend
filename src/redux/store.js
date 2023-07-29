import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './message/messageSlice';

const store = configureStore({
  reducer: {
    messages: messageReducer,
  },
});

export default store;
