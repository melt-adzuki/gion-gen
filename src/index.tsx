import React from "react"
import ReactDOM from "react-dom"
import App from "@/components/App"
import createStore from "@/reducks/store/store"
import { Provider } from "react-redux"

export const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector<HTMLDivElement>("#root")
)
