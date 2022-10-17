import { changeVisibilityOfSettings, useSelector } from "@/store"
import Button from "./Button"
import styled from "styled-components"
import { useDispatch } from "react-redux"


const Wrapper = styled.div`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: hsla(0, 0%, 95%, 75%);
	color: black;
	border-radius: 8px;
	padding: 32px;
	margin-inline: auto;
	margin-block: 32px;
	max-width: 768px;
	height: auto;
`

const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
`

const Header = styled.p`
	font-size: 48px;
`

const ItemContainer = styled.section`
	padding: 32px;
`

const ItemTitle = styled.p`
	font-size: 24px;
	margin-bottom: 16px;
`

const SettingsPanel = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector(state => state)

	if (!selector.isSettingsVisible) return <></>

	return (
		<>
			<Background className="stack" />

			<Wrapper className="stack">
				<Header>設定</Header>

				<ItemContainer>
					<ItemTitle>設定できる項目は現在ありません。</ItemTitle>
				</ItemContainer>

				<p>
					<Button onClick={() => dispatch(changeVisibilityOfSettings("close"))}>閉じる</Button>
				</p>
			</Wrapper>
		</>
	)
}

export default SettingsPanel
