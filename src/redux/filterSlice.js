import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
