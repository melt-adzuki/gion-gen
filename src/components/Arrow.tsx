import React, { PropsWithoutRef } from "react"
import Button from "./Button"
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
`

const Arrow: React.FC<Props> = props =>
{
	switch (props.direction)
	{
	case "left":
		return (
			<Wrapper direction="left" onClick={props.onClick}>
				{"<"}
			</Wrapper>
		)

	case "right":
		return (
			<Wrapper direction="right" onClick={props.onClick}>
				{">"}
			</Wrapper>
		)

	default:
		return <></>
	}
}

export default Arrow
