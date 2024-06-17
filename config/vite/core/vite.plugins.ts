import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

export const vitePlugins = () => {
	const plugins = [
		react(),
		svgr(),
		alias({
			entries: [
				{
					find: "@",
					replacement: resolve("src"),
				},
				{
					find: "@icons",
					replacement: resolve("src", "shared", "assets", "img", "icons"),
				},
			],
		}),
		viteStaticCopy({
			targets: [
				{
					src: "deploy/nginx",
					dest: "config",
				},
			],
		}),
	];

	return plugins;
};
