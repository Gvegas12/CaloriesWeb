import { RouteProps } from "react-router-dom";

import FoodPage from "@/pages/FoodPage";
import HomePage from "@/pages/HomePage";
import { protectedRoutePaths } from "@/shared/config/routes";

export const protectedRouteConfig: RouteProps[] = [
	{
		index: true,
		element: <HomePage />,
	},
	{
		path: `${protectedRoutePaths.food}/:id`,
		element: <FoodPage />,
	},
];
