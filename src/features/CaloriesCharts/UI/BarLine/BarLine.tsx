import { FC } from "react";

import s from "./BarLine.module.scss";

interface BarLineProps {
	value: number;
	total: number;
	name: string;
	color: string;
}

const getTopStylesheetValue = (
	total: BarLineProps["total"],
	value: BarLineProps["value"],
) => {
	const percentValueByTotal = (value / total) * 100;
	const res = 100 - percentValueByTotal;
	console.log({ res });

	return res;
};

export const BarLine: FC<BarLineProps> = ({ color, name, total, value }) => {
	return (
		<div className={s.BarLine}>
			<p className={s.value}>{value} g</p>
			<div className={s.barWrapper}>
				<div className={s.bar}>
					<div
						className={s.barValue}
						style={{
							background: color,
							transform: `translateY(${getTopStylesheetValue(total, value)}%)`,
						}}
					/>
				</div>
			</div>
			<div className={s.nameWrapper}>
				<p>{name}</p>
				<p>{total}</p>
			</div>
		</div>
	);
};
