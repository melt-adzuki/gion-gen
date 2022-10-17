import React, { PropsWithoutRef } from "react"
import Button from "@/components/Button"
import arrowBack from "@/assets/arrow-back-outline.svg"
import arrowForward from "@/assets/arrow-forward-outline.svg"
import styled from "styled-components"

type Props = PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
	direction: "left" | "right"
}

const Wrapper = styled(Button)<Props>`
	width: 64px;
	height: 64px;

	&::before {
		content: "";
		display: flex;
		margin: auto;
		width: 24px;
		height: 24px;
		background-image: url(${props => props.direction === "left" ? arrowBack : arrowForward});
	}
`

const Base: React.FC<Props> = props =>
{
	return <Wrapper direction={props.direction} onClick={props.onClick} />
}

export default Base
