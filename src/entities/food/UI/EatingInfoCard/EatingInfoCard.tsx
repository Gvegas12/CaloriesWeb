import { FC, useState } from "react";

import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import { protectedRoutePaths } from "@/shared/config/routes";

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
	opening?: boolean;
}

export const EatingInfoCard: FC<EatingInfoCardProps> = ({
	iconSrc,
	description,
	title,
	bg,
	opening = true,
}) => {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);

	const onToggle = () => {
		setIsActive(!isActive);
	};

	const onClickCard = () => {
		const mockFoodId = 1;
		navigate(`${protectedRoutePaths.food}/${mockFoodId}`);
	};

	return (
		<div
			className={clsx(s.EatingInfoCard, opening && isActive && s.active)}
			style={{ backgroundColor: bg }}
		>
			<EatingInfoCardHeader
				onClickPlus={onToggle}
				iconSrc={iconSrc}
				description={description}
				title={title}
			/>
			{opening && (
				<>
					<EatingInfoCardDetails onClick={onClickCard} />
					<EatingInfoCardDetails onClick={onClickCard} />
					<EatingInfoCardDetails onClick={onClickCard} />
					<EatingInfoCardDetails onClick={onClickCard} />
				</>
			)}
		</div>
	);
};
