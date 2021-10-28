import { generateGion, useSelector } from "@/store"
import Button from "./Button"
import qs from "qs"
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

	const { result } = selector.gion[selector.index]

	const tweetLink = `https://twitter.com/intent/tweet?${qs.stringify(
		{
			hashtags: "擬音ジェネレーター",
			text: result,
			url: `https://hijiki02.github.io/GION?${qs.stringify({ display: result })}`,
		},
	)}`

	return (
		<Container>
			<Button primary={ true } onClick={ () => dispatch(generateGion()) }>
				再生成
			</Button>

			<Button onClick={ () => window.open(tweetLink) }>
				ツイートする
			</Button>

			<Button onClick={ () => window.open("https://github.com/hijiki02/GION") }>
				GitHub
			</Button>
		</Container>
	)
}

export default Control
