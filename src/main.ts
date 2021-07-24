import "modern-css-reset"
import { gionGenerator } from "./gion-gen"
import "./style.css"

const content = document.querySelector<HTMLDivElement>("#content")!
const regenerate = document.querySelector<HTMLButtonElement>("#regenerate")!
const tweet = document.querySelector<HTMLButtonElement>("#tweet")!
const github = document.querySelector<HTMLButtonElement>("#github")!

const show = () => (content.innerHTML = gionGenerator.generate())
document.addEventListener("DOMContentLoaded", show)
regenerate.addEventListener("click", show)

tweet.addEventListener("click", () =>
	window.open(
		`https://twitter.com/intent/tweet?hashtags=擬音ジェネレーター&url=https://hijiki02.github.io/GION/&text=${content.innerHTML}`
	)
)

github.addEventListener("click", () =>
	window.open("https://github.com/hijiki02/GION")
)
