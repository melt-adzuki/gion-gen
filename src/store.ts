import { TypedUseSelectorHook, useSelector as nativeUseSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { gionGenerator } from "./gion-gen"

export type State = {
    gion: string,
}

const initialState: State = {
	gion: gionGenerator.generate(),
}

const slice = createSlice({
	initialState,
	name: "gion",
	reducers: {
		generateGion: state => ({
			...state,
			gion: gionGenerator.generate(),
		}),
	},
})

export const { generateGion } = slice.actions

export const store = configureStore({
	reducer: slice.reducer,
})

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = nativeUseSelector
