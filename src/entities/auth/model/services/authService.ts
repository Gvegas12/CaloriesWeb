import { authAPIService } from "../core/api/authAPIService";
import { AuthStore, useAuthStore } from "../core/store/authStore";

interface IAuthService {
	authAPIService: typeof authAPIService;
	useAuthStore: typeof useAuthStore;
	AuthStore: typeof AuthStore;
}

export const AuthService: IAuthService = {
	authAPIService,
	useAuthStore,
	AuthStore,
};
