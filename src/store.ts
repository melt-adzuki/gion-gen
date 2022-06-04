import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector as nativeUseSelector } from "react-redux"
import generate from "@/gion-gen"
import qs from "qs"

const params = qs.parse(location.search, { ignoreQueryPrefix: true })
const forcedResult = params.display?.toString()

export type State = {
	gion: ReturnType<typeof generate>[],
	index: number,
	isSettingsVisible: boolean,
}

const initialState: State = {
	gion: [generate({ forcedResult })],
	index: 0,
	isSettingsVisible: false,
}

const slice = createSlice({
	initialState,
	name: "gion",
	reducers: {
		changeVisibilityOfSettings: (state, action: PayloadAction<"open" | "close">) => ({
			...state,
			isSettingsVisible: action.payload === "open",
		}),
		generateGion: state => ({
			...state,
			gion: [generate(), ...state.gion],
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
	},
})

export const { generateGion, goNext, goPrev, changeVisibilityOfSettings } = slice.actions

export const store = configureStore({
	reducer: slice.reducer,
})

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = nativeUseSelector
