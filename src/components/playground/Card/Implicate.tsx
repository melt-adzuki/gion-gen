import Base from "./Base"
import { PropsOf } from "@/special-word"
import React from "react"

const Implicate: React.FC<PropsOf<"Implicate">> = props =>
{
	return (
		<Base
			category="GION Implicate"
			link={props.link}
			title={props.cause}
			description={props.content}
		/>
	)
}

export default Implicate
