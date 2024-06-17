import { userAPIService } from "../core/api/foodAPIService";
import { FoodStore, useFoodStore } from "../core/store/foodStore";

interface IFoodService {
	api: typeof userAPIService;
	store: {
		hook: typeof useFoodStore;
		instance: typeof FoodStore;
	};
}

export const FoodService: IFoodService = {
	api: userAPIService,
	store: {
		hook: useFoodStore,
		instance: FoodStore,
	},
};
