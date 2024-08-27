import { FC, Fragment } from "react";

import s from "./Vitamins.module.scss";

export type VitaminsDataItem = {
	name: string;
	value: string;
};

interface VitaminsProps {
	data: VitaminsDataItem[];
}

export const Vitamins: FC<VitaminsProps> = ({ data }) => {
	return (
		<div className={s.Vitamins}>
			<p className={s.title}>Витамины</p>
			<div className={s.table}>
				{data.map(({ name, value }, i) => (
					<Fragment key={i}>
						<div className={s.td}>{name}</div>
						<div className={s.td}>{value}</div>
					</Fragment>
				))}
			</div>
		</div>
	);
};
