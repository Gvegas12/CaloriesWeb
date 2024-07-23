import { FC, useState } from "react";

import clsx from "clsx";

import UI from "@/shared/UI";
import PlusIcon from "@icons/plus.svg?react";

import s from "./Bottle.module.scss";

const maxBottleSizePercent = 100;
const showBubblesLevelPercent = 64;

export const Bottle: FC = () => {
	const [waterLevel, setWaterLevel] = useState(0);

	const onAddWater = () => {
		if (waterLevel >= maxBottleSizePercent) return;
		setWaterLevel((prev) => (prev += 10));
	};

	const waterLevelPercent = maxBottleSizePercent - waterLevel;
	const isShowBubbles = waterLevelPercent <= showBubblesLevelPercent;

	return (
		<div className={s.Bottle}>
			<div className={s.bottleHead} />
			<div className={s.bottleBody}>
				<div
					style={{
						top: `${waterLevelPercent}%`,
					}}
					className={s.waterLevel}
				></div>
			</div>
			<div className={clsx(s.addBtnWrapper)}>
				<div className={clsx(s.bubbles, isShowBubbles && s.show)} />
				<UI.Button onClick={onAddWater} className={s.addBtn}>
					<PlusIcon />
				</UI.Button>
			</div>
		</div>
	);
};
