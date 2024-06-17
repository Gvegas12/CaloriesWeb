import { userAPIService } from "../core/api/userAPIService";
import { UserStore, useUserStore } from "../core/store/userStore";

interface IUserService {
	api: typeof userAPIService;
	store: {
		hook: typeof useUserStore;
		instance: typeof UserStore;
	};
}

export const UserService: IUserService = {
	api: userAPIService,
	store: {
		hook: useUserStore,
		instance: UserStore,
	},
};
