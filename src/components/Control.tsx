import { useDispatch, useSelector } from "react-redux"
import { IGionState } from "@/types"
import React from "react"
import { gionGenerationAction } from "@/reducks/gionGeneration/actions"

const Control = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector((state: IGionState) => state)

	return (
		<div className="control">
			<button
				className="button button_main"
				onClick={ () => dispatch(gionGenerationAction()) }
			>再生成</button>
			<button
				className="button"
				onClick={ () => window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${selector.gion.content}`) }
			>ツイートする</button>
			<button
				className="button"
				onClick={ () => window.open("https://github.com/hijiki02/GION") }
			>GitHub</button>
		</div>
	)
}

export default Control
