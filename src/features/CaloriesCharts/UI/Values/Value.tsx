import { FC } from "react";

import { TFoodElement } from "@/entities/food";

import s from "./Values.module.scss";

interface ValueProps extends TFoodElement {}

export const Value: FC<ValueProps> = ({ name, color }) => {
	return (
		<div className={s.Value}>
			<div style={{ background: color }} className={s.colorPoint} />
			<p className={s.name}>{name}</p>
		</div>
	);
};
