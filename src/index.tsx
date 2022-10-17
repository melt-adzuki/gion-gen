import App from "@/App"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import { store } from "@/store"

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector<HTMLDivElement>("#root"),
)
