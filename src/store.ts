import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector as nativeUseSelector } from "react-redux"
import GionGenerator from "@/gion-gen"
import qs from "qs"

const params = qs.parse(location.search, { ignoreQueryPrefix: true })
const forcedResult = params.display?.toString()

const seedRegex = (/(?<seed>\d{6})(?<salt>\d*)/u).exec(params.seed?.toString() ?? "")?.groups
const salt = Number(seedRegex?.salt ?? 0)
const seed = seedRegex?.seed ?? Math.floor(Math.random() * 1000000).toString()

const gionGenerator = new GionGenerator(seed)

export type State = {
	gion: ReturnType<GionGenerator["generate"]>[],
	index: number,
	isSettingsVisible: boolean,
	salt: number,
	seed: string,
}

const initialState: State = {
	gion: [gionGenerator.generate({ forcedResult, salt })],
	index: 0,
	isSettingsVisible: false,
	salt,
	seed,
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
			gion: [gionGenerator.generate({ salt: state.salt + 1 }), ...state.gion],
			index: 0,
			salt: state.salt + 1,
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
