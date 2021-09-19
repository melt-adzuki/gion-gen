import { generateGion, resetIndex, useSelector } from "@/store"
import Button from "./Button"
import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const Container = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
`

const Control = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector(state => state)

	return (
		<Container>
			<Button primary={true} onClick={ () =>
			{
				dispatch(generateGion())
				dispatch(resetIndex())
			} }>
				再生成
			</Button>

			<Button onClick={ () => window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${selector.gion}`) }>
				ツイートする
			</Button>

			<Button onClick={ () => window.open("https://github.com/hijiki02/GION") }>
				GitHub
			</Button>
		</Container>
	)
}

export default Control
