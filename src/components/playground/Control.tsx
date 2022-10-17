import { generateGion, useSelector } from "@/store"
import Button from "../Button"
import qs from "qs"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { useState } from "react"

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

	const result = selector.gion[selector.index]
	const { index, salt, seed } = selector

	const content = `${result} #擬音ジェネレーター\nhttps://gion.azuki.cf?${qs.stringify({ seed: seed + (salt - index) })}`
	const tweetLink = `https://twitter.com/intent/tweet?${qs.stringify({ text: content })}`

	const [isCopied, setIsCopied] = useState<boolean>(false)

	const copyLink = (): void =>
	{
		navigator.clipboard.writeText(content)
		setIsCopied(true)

		setTimeout((): void => setIsCopied(false), 1500)
	}

	return (
		<Container>
			<Button primary={true} onClick={() => dispatch(generateGion())}>
				再生成
			</Button>

			<Button onClick={() => window.open(tweetLink)}>
				ツイート
			</Button>

			<Button onClick={() => copyLink()}>
				{isCopied ? "✔コピー" : "コピー"}
			</Button>
		</Container>
	)
}

export default Control
