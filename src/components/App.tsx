import "modern-css-reset"
import Arrow from "./Arrow"
import Card from "./Card"
import Control from "./Control"
import Granim from "granim"
import React from "react"
import Result from "./Result"
import SettingsButton from "./SettingsButton"
import SettingsPanel from "./SettingsPanel"
import styled from "styled-components"


class App extends React.Component
{
	private granimInstance!: Granim

	private readonly Container = styled.section`
		font-family: "RocknRoll One", sans-serif;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 32px;
	`

	private readonly GranimCanvas = styled.canvas`
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	`

	render(): JSX.Element
	{
		const { Container, GranimCanvas } = this

		return (
			<>
				<GranimCanvas id="granim-canvas" />
				<Container>
					<SettingsPanel />
					<SettingsButton />
					<Arrow />
					<Card />
					<Result />
					<Control />
				</Container>
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
