import { goNext, goPrev, useSelector } from "@/store"
import Base from "./Base"
import media from "styled-media-query"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Left = styled(Container)`
	grid-area: 2 / 1 / 3 / 2;
	${media.lessThan("huge")`
		grid-area: 3 / 1 / 4 / 2;
	`}
`

const Right = styled(Container)`
	grid-area: 2 / 3 / 3 / 4;
	${media.lessThan("huge")`
		grid-area: 3 / 3 / 4 / 4;
	`}
`

const Arrow = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector(state => state)

	return (
		<>
			{
				selector.gion[selector.index + 1] &&
				<Left>
					<Base direction="left" onClick={() => dispatch(goPrev())} />
				</Left>
			}
			{
				selector.gion[selector.index - 1] &&
				<Right>
					<Base direction="right" onClick={() => dispatch(goNext())} />
				</Right>
			}
		</>
	)
}

export default Arrow
