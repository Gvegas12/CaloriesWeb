import { FC } from "react";

import { TColorValues } from "../CaloriesCharts";

import { Value } from "./Value";

import s from "./Values.module.scss";

interface ValuesProps {
	colorValues: TColorValues;
}

export const Values: FC<ValuesProps> = ({
	colorValues: { calories, carbohydrates, fats, leftCalories, protein, rsk },
}) => {
	return (
		<div className={s.Values}>
			<Value color={carbohydrates.color} name={carbohydrates.name} />
			<Value color={calories.color} name={calories.name} />
			<Value color={leftCalories.color} name={leftCalories.name} />
			<Value color={fats.color} name={fats.name} />
			<Value color={protein.color} name={protein.name} />
			<Value color={rsk.color} name={rsk.name} />
		</div>
	);
};
