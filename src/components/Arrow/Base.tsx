import React, { PropsWithoutRef } from "react"
import Button from "../Button"
import media from "styled-media-query"
import styled from "styled-components"

type Props = PropsWithoutRef<JSX.IntrinsicElements["button"]> & {
    direction: "left" | "right"
}

const padding = "64px"

const Wrapper = styled(Button)<Props>`
    width: 64px;
    height: 64px;
    position: absolute;
    ${props => props.direction === "left"
		? `left: ${padding}`
		: `right: ${padding}`
};
	${media.lessThan("large")`
		bottom: ${padding};
	`}
	&::before {
		content: "";
		display: flex;
		margin: auto;
		width: 24px;
		height: 24px;
		background-image: url(${props => props.direction === "left" ? "./arrow-back-outline.svg" : "./arrow-forward-outline.svg"});
	}
`

const Base: React.FC<Props> = props =>
{
	switch (props.direction)
	{
	case "left":
		return <Wrapper direction="left" onClick={ props.onClick } />

	case "right":
		return <Wrapper direction="right" onClick={ props.onClick } />

	default:
		return <></>
	}
}

export default Base
