import path from "path"
import react from "@vitejs/plugin-react"

export default () => (
	{
		base: "/",
		plugins: [react()],
		resolve: {
			alias: [
				{
					find: "@",
					replacement: path.resolve(__dirname, "src"),
				},
			],
		},
		server: {
			host: true,
		},
	}
)
