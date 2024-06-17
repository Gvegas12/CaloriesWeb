import axios from "axios";

import { publicRoutePaths } from "@/shared/config/routes";

export const $api = axios.create({
	baseURL: __API_URL__,
});

export const LOCAL_STORAGE_ACCESS_TOKEN = "access_token";
export const LOCAL_STORAGE_USER_DATA = "user";

export const logout = () => {
	// localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);
	// localStorage.removeItem(LOCAL_STORAGE_USER_DATA);
	window.location.replace(publicRoutePaths.auth);
};

$api.interceptors.request.use((config) => {
	const access_token = `Bearer ${localStorage.getItem(
		LOCAL_STORAGE_ACCESS_TOKEN,
	)}`;

	if (access_token) config.headers.Authorization = access_token;

	return config;
});

$api.interceptors.response.use(
	(config) => {
		const access_token = config.data?.access_token;
		if (access_token)
			localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, access_token);

		return config;
	},
	(err) => {
		if (err.response.status === 401) {
			logout();
		}
	},
);
