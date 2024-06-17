import { FC, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { protectedRouteConfig, publicRouteConfig } from "@/app/router/config";
import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths } from "@/shared/config/routes";

import { ProtectedRoutesProxy } from "../ProtectedRoutesProxy";

const AppRouter: FC = () => {
	return (
		<Routes>
			{publicRouteConfig.map(({ path, element }, i) => (
				<Route
					key={i}
					path={path}
					element={<Suspense fallback={<div />}>{element}</Suspense>}
				/>
			))}
			<Route element={<MainLayout />} path={protectedRoutePaths.home}>
				{protectedRouteConfig.map(({ path, element, index }, i) => (
					<Route
						index={index}
						key={i}
						path={path}
						element={
							<ProtectedRoutesProxy>
								<Suspense fallback={<div />}>{element}</Suspense>
							</ProtectedRoutesProxy>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default AppRouter;
