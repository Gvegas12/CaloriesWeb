import { FC } from "react";

import { ResponsivePie } from "@nivo/pie";

import UI from "@/shared/UI";

import { ArcLabelsComponent } from "./ArcLabelsComponent";
import data from "./data.json";
import DotsIcon from "./dots.svg?react";

import s from "./WaterInfoDescription.module.scss";

interface WaterInfoDescriptionProps {}

export const WaterInfoDescription: FC<WaterInfoDescriptionProps> = () => {
	return (
		<div className={s.WaterInfoDescription}>
			<div className={s.pieChart}>
				<ResponsivePie
					data={data}
					cornerRadius={5}
					enableArcLinkLabels={false}
					colors={data.map((item) => item.color)}
					tooltip={() => ""}
					valueFormat={(value) => `${value}%`}
					arcLabelsComponent={({ datum, label, style }) => (
						<ArcLabelsComponent datum={datum} label={label} svgStyle={style} />
					)}
				/>
			</div>
			<UI.InputRange />
			<UI.InputRange />
			<div className={s.descriptionWrapper}>
				<p className={s.description}>
					Регулярное употребление воды может снизить риск многих заболеваний,
					включая сердечные заболевания, инсульт и рак.
				</p>
				<p className={s.description}>
					Вода необходима для транспортировки иммунных клеток и антител по всему
					телу.
				</p>
				<p className={s.description}>
					Вода помогает растворять пищевые вещества и перемещать пищу по
					пищеварительному тракту.
				</p>
			</div>
			<DotsIcon className={s.dots} />
		</div>
	);
};
