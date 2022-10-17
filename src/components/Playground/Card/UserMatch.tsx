import Base from "./Base"
import { PropsOf } from "@/special-word"
import React from "react"

const UserMatch: React.FC<PropsOf<"UserMatch">> = props =>
{
	return (
		<Base
			category="GION UserMatch"
			iconPath={`https://unavatar.io/twitter/${props.username}`}
			link={`https://twitter.com/${props.username}`}
			title={props.username}
			description={props.description}
		/>
	)
}

export default UserMatch
