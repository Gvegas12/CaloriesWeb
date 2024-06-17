import { Food } from "../../types/food.types";

export interface IFoodStore {
	foods: Food[] | null;
	setFoods: (data: Food[]) => void;
}
