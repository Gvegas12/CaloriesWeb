import { FC } from "react";

import PieChartIcon from "@icons/pie_chart.svg?react";
import TimeIcon from "@icons/time.svg?react";

import s from "./EatingInfoCardDetails.module.scss";

export interface EatingInfoCardDetailsProps {
	onClick?: () => void;
}

export const EatingInfoCardDetails: FC<EatingInfoCardDetailsProps> = ({
	onClick,
}) => (
	<div onClick={onClick} className={s.EatingInfoCardDetails}>
		<div className={s.foodInfo}>
			<div className={s.foodInfoHeader}>
				<p className={s.foodName}>Яичница</p>
				<p className={s.foodKcal}>400 kcal</p>
			</div>
			<div className={s.energyValue}>
				<div className={s.energyValueItem}>
					<div
						className={s.bar}
						style={{
							height: "5px",
							width: "100%",
							background:
								"linear-gradient(to right, pink 90%, paleturquoise 10%)",
						}}
					/>
					<p className={s.energyValueName}>Белки</p>
					<p className={s.energyValueG}>40 g</p>
					<p className={s.energyValueAlert}>5 g сверху</p>
				</div>
				<div className={s.energyValueItem}>
					<div
						className={s.bar}
						style={{
							height: "5px",
							width: "100%",
							background:
								"linear-gradient(to right, pink 60%, paleturquoise 10%)",
						}}
					/>
					<p className={s.energyValueName}>Жиры</p>
					<p className={s.energyValueG}>220 g</p>
					<p className={s.energyValueAlert}>20 g осталось</p>
				</div>
				<div className={s.energyValueItem}>
					<div
						className={s.bar}
						style={{
							height: "5px",
							width: "100%",
							background:
								"linear-gradient(to right, pink 90%, paleturquoise 10%)",
						}}
					/>
					<p className={s.energyValueName}>Белки</p>
					<p className={s.energyValueG}>40 g</p>
					<p className={s.energyValueAlert}>В норме</p>
				</div>
			</div>
		</div>
		<div className={s.times}>
			<p className={s.timesTitle}>Итоги:</p>
			<div className={s.timesList}>
				<div className={s.timesItem}>
					<TimeIcon />
					<p className={s.timesValue}>9:30 утра</p>
				</div>
				<div className={s.timesItem}>
					<PieChartIcon />
					<p className={s.timesValue}>400 ккал</p>
				</div>
				<div className={s.timesItem}>
					<PieChartIcon />
					<p className={s.timesValue}>400 грамм</p>
				</div>
			</div>
		</div>
	</div>
);
