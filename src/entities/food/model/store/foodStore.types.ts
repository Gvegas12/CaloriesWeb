import { Food } from "../types/food.types";

import { EatingMap } from "./constants";

export interface IFoodStore {
	foods: Food[] | null;
	setFoods: (data: Food[]) => void;
	eatingMap: EatingMap;
}
