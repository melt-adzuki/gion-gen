import { IGionState } from "@/types"
import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Wrapper = styled.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`

const Result = (): JSX.Element =>
{
	const selector = useSelector((state: IGionState) => state)

	return (
		<Wrapper>
			{selector.gion.content}
		</Wrapper>
	)
}

export default Result
