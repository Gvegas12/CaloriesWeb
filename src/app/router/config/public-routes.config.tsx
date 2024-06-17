import { RouteProps } from "react-router-dom";

import AuthPage from "@/pages/AuthPage";
import { publicRoutePaths } from "@/shared/config/routes";

export const publicRouteConfig: RouteProps[] = [
	{
		path: `${publicRoutePaths.auth}/*`,
		element: <AuthPage />,
	},
];
