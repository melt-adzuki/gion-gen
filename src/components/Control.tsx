import { generateGion, useSelector } from "@/store"
import Button from "./Button"
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
	const fixedEncodeURIComponent = str =>
	{
		return encodeURIComponent(str).replace(/[!'()*]/ug, chr =>
		{
			return `%${chr.charCodeAt(0).toString(16)}`
		})
	}
	const result = fixedEncodeURIComponent(selector.gion[selector.index].result)
	return (
		<Container>
			<Button primary={true} onClick={() => dispatch(generateGion())}>
				再生成
			</Button>

			<Button onClick={() => window.open(`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION?display=${result.replaceAll(/%/ug, "%25")}&text=${result}`)}>
				ツイートする
			</Button>

			<Button onClick={() => window.open("https://github.com/hijiki02/GION")}>
				GitHub
			</Button>
		</Container>
	)
}

export default Control
