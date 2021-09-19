import { IGionState } from "@/types"
import React from "react"
import { useSelector } from "react-redux"

const Result = (): JSX.Element =>
{
	const selector = useSelector((state: IGionState) => state)

	return (
		<div id="content">{ selector.gion.content }</div>
	)
}

export default Result
