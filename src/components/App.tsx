import "modern-css-reset"
import "../assets/main.css"
import Arrow from "./Arrow"
import Card from "./Card"
import Control from "./Control"
import Granim from "granim"
import Header from "./Header"
import React from "react"
import Result from "./Result"
import SettingsPanel from "./SettingsPanel"
import media from "styled-media-query"
import styled from "styled-components"


class App extends React.Component
{
	private granimInstance?: Granim

	private readonly Grid = styled.section`
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

	private readonly Center = styled.div`
		grid-area: 2 / 2 / 3 / 3;
		${media.lessThan("huge")`
			grid-area: 2 / 1 / 3 / 4;
		`}
		display: flex;
		flex-direction: column;
		gap: 16px;
	`

	private readonly Top = styled.div`
		grid-area: 1 / 1 / 2 / 4;
		display: flex;
		flex-direction: column;
		gap: 32px;
		height: 100%;
	`

	render(): JSX.Element
	{
		const { Grid, Center, Top } = this

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

	componentDidMount(): void
	{
		this.granimInstance = new Granim({
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
	}
}


export default App
