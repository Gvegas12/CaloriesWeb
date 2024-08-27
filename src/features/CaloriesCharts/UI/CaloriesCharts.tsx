import { FC } from "react";

import { foodElementsMap } from "@/entities/food";
import UI from "@/shared/UI";

import { Values } from "./Values/Values";

import s from "./CaloriesCharts.module.scss";

interface CaloriesChartsProps {}

export const CaloriesCharts: FC<CaloriesChartsProps> = () => {
	return (
		<div className={s.CaloriesCharts}>
			<Values colorValues={foodElementsMap} />
			<div className={s.bars}>
				<UI.BarLine
					color={foodElementsMap.carbohydrates.color}
					name={foodElementsMap.carbohydrates.name}
					total={70}
					value={10}
				/>
				<UI.BarLine
					color={foodElementsMap.calories.color}
					name={foodElementsMap.calories.name}
					total={70}
					value={20}
				/>
				<UI.BarLine
					color={foodElementsMap.leftCalories.color}
					name={foodElementsMap.leftCalories.name}
					total={70}
					value={30}
				/>
				<UI.BarLine
					color={foodElementsMap.fats.color}
					name={foodElementsMap.fats.name}
					total={70}
					value={40}
				/>
				<UI.BarLine
					color={foodElementsMap.protein.color}
					name={foodElementsMap.protein.name}
					total={70}
					value={50}
				/>
				<UI.BarLine
					color={foodElementsMap.rsk.color}
					name={foodElementsMap.rsk.name}
					total={70}
					value={60}
				/>
			</div>
		</div>
	);
};
