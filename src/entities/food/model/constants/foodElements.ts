const colors = {
	blue: "#99BCFB",
	gray: "#D9D9D9",
	green: "#DCFB99",
	green10: "#9CCB67",
	violet: "#9C99FB",
	pink: "#E299FB",
};

type TFoodElementType =
	| "carbohydrates"
	| "calories"
	| "leftCalories"
	| "fats"
	| "protein"
	| "rsk";

export type TFoodElement = {
	name: string;
	color: string;
};

export type TFoodElements = Record<TFoodElementType, TFoodElement>;

export const foodElementsMap: TFoodElements = {
	carbohydrates: {
		name: "Углеводы",
		color: colors.blue,
	},
	calories: {
		name: "Калории",
		color: colors.green10,
	},
	leftCalories: {
		name: "Осталось",
		color: colors.gray,
	},
	fats: {
		name: "Жиры",
		color: colors.green,
	},
	protein: {
		name: "Белки",
		color: colors.violet,
	},
	rsk: {
		name: "РСК",
		color: colors.pink,
	},
};
