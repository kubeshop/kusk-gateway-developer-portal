import {createSlice} from '@reduxjs/toolkit';

import initialState from '@redux/initialState';
import {RootState} from '@redux/store';

export const mainSlice = createSlice({
  name: 'main',
  initialState: initialState.main,
  reducers: {},
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
