import "modern-css-reset"
import "@/style.css"
import Control from "./Control"
import React from "react"
import Result from "./Result"

const App = (): JSX.Element =>
{
	return (
		<section className="flex-center has-animated-gradient" id="app">
			<Result />
			<Control />
		</section>
	)
}

export default App
