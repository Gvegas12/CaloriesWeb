import { FC } from "react";

import { BarLine } from "./BarLine/BarLine";
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
			<div className={s.bars}>
				<BarLine
					color={colorValues.carbohydrates.color}
					name={colorValues.carbohydrates.name}
					total={70}
					value={10}
				/>
				<BarLine
					color={colorValues.calories.color}
					name={colorValues.calories.name}
					total={70}
					value={20}
				/>
				<BarLine
					color={colorValues.leftCalories.color}
					name={colorValues.leftCalories.name}
					total={70}
					value={30}
				/>
				<BarLine
					color={colorValues.fats.color}
					name={colorValues.fats.name}
					total={70}
					value={40}
				/>
				<BarLine
					color={colorValues.protein.color}
					name={colorValues.protein.name}
					total={70}
					value={50}
				/>
				<BarLine
					color={colorValues.rsk.color}
					name={colorValues.rsk.name}
					total={70}
					value={60}
				/>
			</div>
		</div>
	);
};
