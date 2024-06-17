import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { storeWithShallow } from "@/shared/lib";

import { IUserStore } from "./userStore.types";

const store = create(
	devtools(
		immer<IUserStore>((set) => ({
			user: null,
			setUser(user) {
				set({ user });
			},
		})),
	),
);

const useUserStore = storeWithShallow<IUserStore>(store);

export { useUserStore, store as UserStore };
