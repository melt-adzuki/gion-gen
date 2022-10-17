import "modern-css-reset"
import "@/assets/main.css"
import { useEffect, useRef } from "react"
import Granim from "granim"
import Playground from "@/components/Playground"
import SettingsPanel from "@/components/SettingsPanel"
import utilStyles from "@/utils.module.css"

const App = (): JSX.Element =>
{
	const granimCanvasRef = useRef(null)

	useEffect(() =>
	{
		// eslint-disable-next-line no-new
		new Granim({
			direction: "left-right",
			element: granimCanvasRef.current!,
			states:
			{
				"default-state":
				{
					gradients: [["#FF8008", "#be9c46"], ["#4CB8C4", "#3CD3AD"], ["#24C6DC", "#514A9D"], ["#b045be", "#912323"]],
					transitionSpeed: 2000,
				},
			},
		})
	}, [granimCanvasRef])

	return (
		<>
			<canvas className={utilStyles.stack} ref={granimCanvasRef} />
			<Playground />
			<SettingsPanel />
		</>
	)
}


export default App
