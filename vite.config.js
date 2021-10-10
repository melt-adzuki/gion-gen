import { loadEnv } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

const specificOptions = ({ command, mode }) =>
{
	if (command === "serve")
	{
		return {
			// Serve specific config
			server: {
				fs: {
					allow: ["."],
				},
				host: loadEnv(mode, process.cwd()).VITE_SERVER_IP,
			},
		}
	}
	return {
		base: "/GION/",
	}
}

export default ({ command, mode }) => (
	{
		...specificOptions({ command, mode }),
		plugins: [react()],
		resolve: {
			alias: [
				{
					find: "@",
					replacement: path.resolve(__dirname, "src"),
				},
			],
		},
	}
)
