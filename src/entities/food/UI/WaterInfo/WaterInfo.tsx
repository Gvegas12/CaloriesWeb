import { FC } from "react";

import clsx from "clsx";

import { Bottle } from "./Bottle";
import { WaterInfoDescription } from "./WaterInfoDescription";

import s from "./WaterInfo.module.scss";

interface WaterInfoProps {
	className?: string;
}

export const WaterInfo: FC<WaterInfoProps> = ({ className }) => {
	return (
		<div className={clsx(s.WaterInfo, className)}>
			<Bottle />
			<WaterInfoDescription />
		</div>
	);
};
