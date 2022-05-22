import styled from "styled-components"
import { useSelector } from "@/store"

const Wrapper = styled.div`
	color: white;
	text-align: center;
	font-size: min(10vw, 64px);
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Result = (): JSX.Element =>
{
	const selector = useSelector(state => state)

	return (
		<Wrapper>
			{ selector.gion[selector.index].result }
		</Wrapper>
	)
}

export default Result
