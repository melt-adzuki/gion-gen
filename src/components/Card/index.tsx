import Implicate from "./Implicate"
import UserMatch from "./UserMatch"
import { useSelector } from "@/store"

const Card = (): JSX.Element =>
{
	const selector = useSelector(state => state)
	const specialWord = selector.gion[selector.index].getSpecialWord()

	switch (specialWord?.category)
	{
		case "UserMatch":
			return <UserMatch { ...specialWord } />

		case "Implicate":
			return <Implicate { ...specialWord } />

		default:
			return <></>
	}
}

export default Card
