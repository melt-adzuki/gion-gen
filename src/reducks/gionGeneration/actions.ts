import { Action } from "@/types"
import { gionGenerator } from "@/gion-gen"

export const GION_GENERATION = "GION_GENERATION"
export const gionGenerationAction = (): Action => ({
	payload: {
		content: gionGenerator.generate(),
	},
	type: "GION_GENERATION",
})
