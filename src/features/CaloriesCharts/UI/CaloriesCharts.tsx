import { FC } from "react";

import { Values } from "./Values/Values";

import s from "./CaloriesCharts.module.scss";

const colors = {
	blue: "#99BCFB",
	gray: "#D9D9D9",
	green: "#DCFB99",
	green10: "#9CCB67",
	violet: "#9C99FB",
	pink: "#E299FB",
};

type ColorValueType =
	| "carbohydrates"
	| "calories"
	| "leftCalories"
	| "fats"
	| "protein"
	| "rsk";

export type TColorValuesItem = {
	name: string;
	color: string;
};

export type TColorValues = Record<ColorValueType, TColorValuesItem>;

const colorValues: TColorValues = {
	carbohydrates: {
		name: "Углеводы",
		color: colors.blue,
	},
	calories: {
		name: "Калории",
		color: colors.green10,
	},
	leftCalories: {
		name: "Осталось",
		color: colors.gray,
	},
	fats: {
		name: "Жиры",
		color: colors.green,
	},
	protein: {
		name: "Белки",
		color: colors.violet,
	},
	rsk: {
		name: "РСК",
		color: colors.pink,
	},
};

interface CaloriesChartsProps {}

export const CaloriesCharts: FC<CaloriesChartsProps> = () => {
	return (
		<div className={s.CaloriesCharts}>
			<Values colorValues={colorValues} />
			<div className={s.chart}></div>
		</div>
	);
};
