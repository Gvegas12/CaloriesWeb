import { FC } from "react";

import clsx from "clsx";

import s from "./UIBarLine.module.scss";

interface BarLineProps {
	value: number;
	total: number;
	name: string;
	color: string;
	className?: string;
}

const getTopStylesheetValue = (
	total: BarLineProps["total"],
	value: BarLineProps["value"],
) => {
	const percentValueByTotal = (value / total) * 100;
	const res = 100 - percentValueByTotal;

	return res;
};

export const UIBarLine: FC<BarLineProps> = ({
	color,
	name,
	total,
	value,
	className,
}) => {
	return (
		<div className={clsx(s.BarLine, className)}>
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
