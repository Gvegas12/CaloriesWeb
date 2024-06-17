import { FC } from "react";

import { TColorValuesItem } from "../CaloriesCharts";

import s from "./Values.module.scss";

interface ValueProps extends TColorValuesItem {}

export const Value: FC<ValueProps> = ({ name, color }) => {
	return (
		<div className={s.Value}>
			<div style={{ background: color }} className={s.colorPoint} />
			<p className={s.name}>{name}</p>
		</div>
	);
};
