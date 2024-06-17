import { RouteProps } from "react-router-dom";

import HomePage from "@/pages/HomePage";

export const protectedRouteConfig: RouteProps[] = [
	{
		index: true,
		element: <HomePage />,
	},
];
