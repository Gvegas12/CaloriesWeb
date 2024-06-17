/// <reference types="vite-plugin-svgr/client" />

declare module "*.scss" {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
	import type React from "react";

	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

/**
 * Переменная является **true**, если сборщик запущен в dev mode
 */
declare const __IS_DEV__: boolean;
/**
 * Переменная является **true**, если Storybook собран в dev mode
 */
declare const __STORYBOOK_IS_DEV__: boolean;
/**
 * Переменная является **true**, если Storybook собран в prod mode
 */
declare const __STORYBOOK_IS_PROD__: boolean;
/**
 * Переменная является **true**, если приложение запущено в Storybook
 */
declare const __IS_STORYBOOK__: boolean;

/**
 * Backend URL
 */
declare const __API_URL__: string;
/**
 * Auth Backend URL
 */
declare const __AUTH_API_URL__: string;
