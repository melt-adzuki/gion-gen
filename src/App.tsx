import "modern-css-reset"
import "@/assets/main.css"
import Background from "@/components/Background"
import Playground from "@/components/Playground"
import SettingsPanel from "@/components/SettingsPanel"

const App = (): JSX.Element =>
{
	return (
		<>
			<Background />
			<Playground />
			<SettingsPanel />
		</>
	)
}


export default App
