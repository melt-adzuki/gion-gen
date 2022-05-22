import gitHubIcon from "../assets/logo-github.svg"
import { openSettings } from "@/store"
import settingsIcon from "../assets/settings-outline.svg"
import styled from "styled-components"
import { useDispatch } from "react-redux"

type ButtonProps = {
	imagePath: string
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: right;
	gap: 32px;
`

const Button = styled.button<ButtonProps>`
	width: 32px;
	height: 32px;
	background-image: url(${props => props.imagePath});
	background-color: transparent;
	border: none;
`

const Header = (): JSX.Element =>
{
	const dispatch = useDispatch()

	return (
		<Wrapper>
			<Button imagePath={settingsIcon} onClick={ () => dispatch(openSettings()) } />
			<Button imagePath={gitHubIcon} onClick={ () => window.open("https://github.com/melt-adzuki/gion-gen") } />
		</Wrapper>
	)
}

export default Header
