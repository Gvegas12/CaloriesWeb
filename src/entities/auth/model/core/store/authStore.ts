import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { publicRoutePaths } from "@/shared/config/routes";
import { storeWithShallow } from "@/shared/lib";

import { IAuthStore } from "./authStore.types";

const store = create(
	devtools(
		immer<IAuthStore>((_set, get) => ({
			isAuth: true,
			checkIsAuth(navigate) {
				const { isAuth } = get();
				if (!isAuth) {
					navigate(publicRoutePaths.auth);
				}
			},
		})),
	),
);

const useAuthStore = storeWithShallow<IAuthStore>(store);

export { useAuthStore, store as AuthStore };
