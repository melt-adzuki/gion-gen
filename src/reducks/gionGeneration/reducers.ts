import * as Actions from "./actions"
import { Action, IGion } from "@/types"
import initialState from "@/reducks/store/initialState"

// eslint-disable-next-line default-param-last
export const GionGenerationReducer = (state = initialState.gion, action: Action): IGion =>
{
	switch (action.type)
	{
	case Actions.GION_GENERATION:
		return {
			...state,
			...action.payload,
		}
	default:
		return state
	}
}
