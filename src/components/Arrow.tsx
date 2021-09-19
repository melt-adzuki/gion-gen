import { goNext, goPrev, useSelector } from "@/store"
import Button from "./Button"
import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

type Props = {
    direction: "left" | "right"
}

const Wrapper = styled(Button)<Props>`
    width: 64px;
    height: 64px;
    position: absolute;
    ${props => props.direction === "left"
		? "left: 64px"
		: "right: 64px"
}
`

const Arrow = (props: Props): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector(state => state)

	if (props.direction === "left" && !(typeof selector.gion[selector.index + 1] === "undefined"))
	{
		return (
			<Wrapper
				direction={ "left" }
				onClick={ () => dispatch(goPrev()) }
			>
				{ "<" }
			</Wrapper>
		)
	}

	if (props.direction === "right" && !(typeof selector.gion[selector.index - 1] === "undefined"))
	{
		return (
			<Wrapper
				direction={ "right" }
				onClick={ () => dispatch(goNext()) }
			>
				{ ">" }
			</Wrapper>
		)
	}

	return (
		<></>
	)
}

export default Arrow
