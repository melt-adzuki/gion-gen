import React from "react"
import styled from "styled-components"
import { useSelector } from "@/store"

const Wrapper = styled.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 96px);
`

const Result = (): JSX.Element =>
{
	const selector = useSelector(state => state)

	return (
		<Wrapper>
			{ selector.gion[selector.index] }
		</Wrapper>
	)
}

export default Result
