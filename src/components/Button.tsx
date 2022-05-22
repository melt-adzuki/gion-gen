import styled from "styled-components"

type Props = {
	primary?: boolean
}

const Button = styled.button<Props>`
	box-shadow: hsla(0deg, 0%, 0%, 10%) 0 2px 8px 0px;
	background-color: ${props => props.primary ? "hsl(200, 100%, 50%, 75%)" : "hsla(0, 0%, 95%, 75%)"};
	color: ${props => props.primary ? "white" : "black"};
	cursor: pointer;
	border-width: 0;
	border-radius: 8px;
	padding: 8px 16px;
`

export default Button
