import path from "path"
import react from "@vitejs/plugin-react"

const specificOptions = ({ command }) =>
{
	if (command === "serve")
	{
		return {
			// Serve specific config
			server: {
				fs: {
					allow: ["."],
				},
				host: true,
			},
		}
	}
	return {
		base: "/",
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
