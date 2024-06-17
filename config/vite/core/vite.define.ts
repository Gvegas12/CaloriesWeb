import { ProxyOptions } from "vite";
import { ViteDefineBuildOptions, ViteBuildDevServerPaths } from "./types";

const getUrl = (
	isDev: boolean,
	port: number,
	segment: ViteBuildDevServerPaths["segment"],
	target: ProxyOptions["target"],
) =>
	isDev
		? JSON.stringify(`http://localhost:${port}${segment}`)
		: JSON.stringify(target + segment);

export const viteDefineOptions = ({
	paths,
	port,
	isDev,
}: ViteDefineBuildOptions) => {
	const API_PATHS = {
		// __AUTH_API_URL__: paths?.auth
		//   ? getUrl(isDev, port, paths.auth.segment, paths.auth.target)
		//   : JSON.stringify(""),
		__API_URL__: getUrl(isDev, port, paths.main.segment, paths.main.target),
	};

	return {
		__IS_DEV__: isDev,
		...API_PATHS,
	};
};
