import { createSlice } from "@reduxjs/toolkit";

import initialState from "@redux/initialState";
import { RootState } from "@redux/store";
import { HYDRATE } from "next-redux-wrapper";

export const mainSlice = createSlice({
	name: "main",
	initialState: initialState.main,
	reducers: {},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.main,
			};
		},
	},
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
