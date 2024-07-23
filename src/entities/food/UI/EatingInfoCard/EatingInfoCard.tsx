import { FC, useState } from "react";

import clsx from "clsx";

import {
	EatingInfoCardDetails,
	EatingInfoCardDetailsProps,
} from "./EatingInfoCardDetails";
import {
	EatingInfoCardHeaderProps,
	EatingInfoCardHeader,
} from "./EatingInfoCardHeader";

import s from "./EatingInfoCard.module.scss";

interface EatingInfoCardProps
	extends Omit<EatingInfoCardHeaderProps, "onClickPlus">,
		EatingInfoCardDetailsProps {
	bg: string;
}

export const EatingInfoCard: FC<EatingInfoCardProps> = ({
	iconSrc,
	description,
	title,
	bg,
}) => {
	const [isActive, setIsActive] = useState(false);

	const onToggle = () => {
		setIsActive(!isActive);
	};

	return (
		<div
			className={clsx(s.EatingInfoCard, isActive && s.active)}
			style={{ backgroundColor: bg }}
		>
			<EatingInfoCardHeader
				onClickPlus={onToggle}
				iconSrc={iconSrc}
				description={description}
				title={title}
			/>
			<EatingInfoCardDetails />
			<EatingInfoCardDetails />
			<EatingInfoCardDetails />
			<EatingInfoCardDetails />
		</div>
	);
};
