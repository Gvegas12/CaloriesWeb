import EggsIcon from "@icons/eggs.svg?react";

export type FoodInfoItem = {
	title: string;
	description: string;
	Icon: JSX.Element;
	color: string;
};
export type FoodInfoItemType = "breakfast" | "lunch" | "snack" | "dinner";

export type FoodInfoMapType = Record<FoodInfoItemType, FoodInfoItem>;

export const foodInfoMap: FoodInfoMapType = {
	breakfast: {
		title: "Завтрак",
		description: "0 kcal",
		Icon: <EggsIcon />,
		color: "#edeffe",
	},
	lunch: {
		title: "Обед",
		description: "0 kcal",
		Icon: <EggsIcon />,
		color: "#ECE3FD",
	},
	snack: {
		title: "Перекус",
		description: "0 kcal",
		Icon: <EggsIcon />,
		color: "#E3FDEC",
	},
	dinner: {
		title: "Ужин",
		description: "0 kcal",
		Icon: <EggsIcon />,
		color: "#E3EFFD",
	},
};
