import { FC } from "react";

import { FoodInfoCalendar } from "@/entities/food";

import s from "./Header.module.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
	return (
		<div className={s.Header}>
			<FoodInfoCalendar />
		</div>
	);
};
