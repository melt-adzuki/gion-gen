import React from "react"
import { useSelector } from "react-redux"
import { IGionState } from "@/types"

const Result = () => {
    const selector = useSelector((state: IGionState) => state)

    return (
        <div id="content">{ selector.gion.content }</div>
    )
}

export default Result
