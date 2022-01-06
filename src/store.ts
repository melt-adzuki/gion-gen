import { TypedUseSelectorHook, useSelector as nativeUseSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import GionGenerator from "@/gion-gen"
import qs from "qs"

const params = qs.parse(location.search, { ignoreQueryPrefix: true })
const forcedResult = params.display?.toString()

export type State = {
	gion: GionGenerator[],
	index: number,
	isSettingsVisible: boolean,
}

const initialState: State = {
	gion: [new GionGenerator().generate(forcedResult)],
	index: 0,
	isSettingsVisible: false,
}

const slice = createSlice({
	initialState,
	name: "gion",
	reducers: {
		closeSettings: state => ({
			...state,
			isSettingsVisible: false,
		}),
		generateGion: state => ({
			...state,
			gion: [new GionGenerator().generate(), ...state.gion],
			index: 0,
		}),
		goNext: state => ({
			...state,
			index: state.index - 1,
		}),
		goPrev: state => ({
			...state,
			index: state.index + 1,
		}),
		openSettings: state => ({
			...state,
			isSettingsVisible: true,
		}),
	},
})

export const { generateGion, goNext, goPrev, closeSettings, openSettings } = slice.actions

export const store = configureStore({
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false,
	}),
	reducer: slice.reducer,
})

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = nativeUseSelector
