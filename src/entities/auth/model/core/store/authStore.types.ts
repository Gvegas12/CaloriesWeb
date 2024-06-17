import { NavigateFunction } from "react-router-dom";

export interface IAuthStore {
	isAuth: boolean;
	checkIsAuth: (navigate: NavigateFunction) => void;
}
