import App from "@/components/App"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom"
import createStore from "@/reducks/store/store"

export const store = createStore()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector<HTMLDivElement>("#root"),
)
