import "modern-css-reset"
import "@/style.css"
import React from "react"
import Result from "./Result"
import Control from "./Control"

const App = () => {
    return (
        <section className="flex-center has-animated-gradient" id="app">
            <Result />
            <Control />
        </section>
    )
}

export default App
