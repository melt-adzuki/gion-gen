import "modern-css-reset"
import "@/assets/main.css"
import Arrow from "@/components/playground/Arrow"
import Card from "@/components/playground/Card"
import Control from "@/components/playground/Control"
import Granim from "granim"
import Header from "@/components/Header"
import Result from "@/components/playground/Result"
import SettingsPanel from "@/components/SettingsPanel"
import media from "styled-media-query"
import styled from "styled-components"
import { useEffect } from "react"

const Grid = styled.section`
	font-family: "RocknRoll One", sans-serif;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr minmax(0, 2fr) 1fr;
	grid-template-rows: minmax(0, 1fr) 2fr minmax(0, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	align-items: center;
	justify-content: center;
	padding: 32px;
`

const Center = styled.div`
	grid-area: 2 / 2 / 3 / 3;
	${media.lessThan("huge")`
		grid-area: 2 / 1 / 3 / 4;
	`}
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const Top = styled.div`
	grid-area: 1 / 1 / 2 / 4;
	display: flex;
	flex-direction: column;
	gap: 32px;
	height: 100%;
`

const App = (): JSX.Element =>
{
	useEffect(() =>
	{
		// eslint-disable-next-line no-new
		new Granim({
			direction: "left-right",
			element: "#granim-canvas",
			states:
			{
				"default-state":
				{
					gradients: [["#FF8008", "#be9c46"], ["#4CB8C4", "#3CD3AD"], ["#24C6DC", "#514A9D"], ["#b045be", "#912323"]],
					transitionSpeed: 2000,
				},
			},
		})
	}, [])

	return (
		<>
			<canvas className="stack" id="granim-canvas" />
			<Grid className="stack">
				<Top>
					<Header />
					<Card />
				</Top>
				<Center>
					<Result />
					<Control />
				</Center>
				<Arrow />
			</Grid>
			<SettingsPanel />
		</>
	)
}


export default App
