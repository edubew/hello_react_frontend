import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk(
  'message/fetchGreeting',
  async (query, thunkAPI) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/random_greeting');

      if (!response.ok) {
        throw new Error('Failed to fetch greeting');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error: ${error}`);
    }
  },
);

export default fetchGreeting;
