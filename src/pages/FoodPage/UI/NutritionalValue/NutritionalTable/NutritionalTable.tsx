import { FC, Fragment } from "react";

import clsx from "clsx";

import { TFoodElement } from "@/entities/food";

import s from "./NutritionalTable.module.scss";

export type NutritionalTableDataItem = {
	name: string;
	value: string;
};

interface NutritionalTableProps extends TFoodElement {
	total: string;
	data: NutritionalTableDataItem[];
}

export const NutritionalTable: FC<NutritionalTableProps> = ({
	name,
	total,
	data,
	color,
}) => {
	return (
		<div style={{ borderColor: color }} className={s.NutritionalTable}>
			<div style={{ background: color }} className={clsx(s.grid, s.thead)}>
				<div className={s.th}>{name}</div>
				<div className={s.th}>{total}</div>
			</div>
			<div className={clsx(s.grid, s.tbody)}>
				{data.map((di, i) => (
					<Fragment key={i}>
						<div style={{ borderColor: color }} className={s.td}>
							{di.name}
						</div>
						<div style={{ borderColor: color }} className={s.td}>
							{di.value}
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
};
