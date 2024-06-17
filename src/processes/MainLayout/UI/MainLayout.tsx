import { FC } from "react";

import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";

const MainLayout: FC = () => {
	return (
		<main>
			<div className={s.MainLayout}>
				<Outlet />
			</div>
		</main>
	);
};

export default MainLayout;
