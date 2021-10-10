import { goNext, goPrev, useSelector } from "@/store"
import Base from "./Base"
import React from "react"
import { useDispatch } from "react-redux"

const Arrow = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector(state => state)

	return (
		<>
			{
				selector.gion[selector.index + 1] &&
                <Base direction="left" onClick={ () => dispatch(goPrev()) } />
			}
			{
				selector.gion[selector.index - 1] &&
                <Base direction="right" onClick={ () => dispatch(goNext()) } />
			}
		</>
	)
}

export default Arrow
