import Base from "./Base"
import React from "react"

type Props = {
    username: string,
    description: string,
}

const UserMatch: React.FC<Props> = props =>
{
	return (
		<Base
			category="GION UserMatch"
			iconPath={ `https://unavatar.io/twitter/${props.username}` }
			link={ `https://twitter.com/${props.username}` }
			title={ props.username }
			description={ props.description }
		/>
	)
}

export default UserMatch
