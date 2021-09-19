import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import { IGionState } from "@/types"
import React from "react"
import { gionGenerationAction } from "@/reducks/gionGeneration/actions"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`

const Control = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector((state: IGionState) => state)

	return (
		<Container>
			<Button primary={true} onClick={ () => dispatch(gionGenerationAction()) }>
				再生成
			</Button>

			<Button onClick={ () => window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${selector.gion.content}`) }>
				ツイートする
			</Button>

			<Button onClick={ () => window.open("https://github.com/hijiki02/GION") }>
				GitHub
			</Button>
		</Container>
	)
}

export default Control
