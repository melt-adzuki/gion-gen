import Implicate from "./Implicate"
import UserMatch from "./UserMatch"
import { specialWordList } from "@/special-word"
import { useSelector } from "@/store"


const Card = (): JSX.Element =>
{
	const selector = useSelector(state => state)
	const specialWord = specialWordList.get(selector.gion[selector.index])

	switch (specialWord?.category)
	{
		case "UserMatch":
			return <UserMatch {...specialWord} />

		case "Implicate":
			return <Implicate {...specialWord} />

		default:
			return <></>
	}
}

export default Card
