import Arrow from "./Arrow"
import Buttons from "./Buttons"
import Card from "./Card"
import Header from "./Header"
import Result from "./Result"
import media from "styled-media-query"
import styled from "styled-components"
import utilStyles from "@/utils.module.css"

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

const Playground = (): JSX.Element =>
{
	return (
		<Grid className={utilStyles.stack}>
			<Top>
				<Header />
				<Card />
			</Top>
			<Center>
				<Result />
				<Buttons />
			</Center>
			<Arrow />
		</Grid>
	)
}

export default Playground
