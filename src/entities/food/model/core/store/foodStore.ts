import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { storeWithShallow } from "@/shared/lib";

import { IFoodStore } from "./foodStore.types";

const store = create(
	devtools(
		immer<IFoodStore>((set) => ({
			foods: null,
			setFoods(foods) {
				set({ foods });
			},
		})),
	),
);

const useFoodStore = storeWithShallow<IFoodStore>(store);

export { useFoodStore, store as FoodStore };
