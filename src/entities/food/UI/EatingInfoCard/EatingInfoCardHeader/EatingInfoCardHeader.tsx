import { FC } from "react";

import PlusIcon from "@icons/plus.svg?react";

import s from "./EatingInfoCardHeader.module.scss";

export interface EatingInfoCardHeaderProps {
	iconSrc: string;
	title: string;
	description?: string;
	onClickPlus: () => void;
}

export const EatingInfoCardHeader: FC<EatingInfoCardHeaderProps> = ({
	description,
	iconSrc,
	title,
	onClickPlus,
}) => (
	<div onClick={onClickPlus} className={s.EatingInfoCardHeader}>
		<div className={s.wrapper}>
			<img src={iconSrc} alt="icon" />
			<div className={s.description}>
				<p className={s.title}>{title}</p>
				<p className={s.descriptionText}>{description}</p>
			</div>
		</div>
		<div>
			<PlusIcon />
		</div>
	</div>
);
