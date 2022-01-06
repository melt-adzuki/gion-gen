import { closeSettings, useSelector } from "@/store"
import Button from "./Button"
import media from "styled-media-query"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const padding = "64px"

const Wrapper = styled.div`
	z-index: 2;
    position: absolute;
    top: ${padding};
    width: 768px;
    ${media.lessThan("large")`
        width: 100%;
    `}
    box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: hsla(0, 0%, 95%, 75%);
	color: black;
	border-radius: 8px;
	padding: 32px;
`

const Background = styled.div`
	z-index: 2;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
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
			<Background />

			<Wrapper>
				<Header>設定</Header>

				<ItemContainer>
					<ItemTitle>設定できる項目は現在ありません。</ItemTitle>
				</ItemContainer>

				<p>
					<Button onClick={() => dispatch(closeSettings())}>閉じる</Button>
				</p>
			</Wrapper>
		</>
	)
}

export default SettingsPanel
