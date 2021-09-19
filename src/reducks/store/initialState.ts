import { IGionState } from "@/types"
import { gionGenerator } from "@/gion-gen"

const initialState: IGionState = {
	gion: {
		content: gionGenerator.generate(),
	},
}

export default initialState
