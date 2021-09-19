import { Action, Store, combineReducers, createStore as reduxCreateStore } from "redux"
import { GionGenerationReducer } from "@/reducks/gionGeneration/reducers"
import { IGionState } from "@/types"

export default function createStore(): Store<IGionState, Action>
{
	return reduxCreateStore(combineReducers({
		gion: GionGenerationReducer,
	}))
}
