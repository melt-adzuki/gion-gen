import { loadEnv } from "vite"

export default ({ command, mode }) =>
{
	if (command === "serve")
	{
		return {
			// Serve specific config
			server: {
				host: loadEnv(mode, process.cwd()).VITE_SERVER_IP,
			},
		}
	}

	return {
		base: "/GION/",
	}
}
