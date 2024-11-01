const LOGIN_ROUTE = "/login";
const REGISTRATION_ROUTE = "/registration";
const AUTH_ROUTE = "/auth";
const PASSWORD_RECOVERY_ROUTE = "/password_recovery";

export const publicRoutePaths = {
	auth: AUTH_ROUTE,
	login: LOGIN_ROUTE,
	registration: REGISTRATION_ROUTE,
	password_recovery: PASSWORD_RECOVERY_ROUTE,
	auth_password_recovery: AUTH_ROUTE + PASSWORD_RECOVERY_ROUTE,
	authLogin: AUTH_ROUTE + LOGIN_ROUTE,
	authRegistration: AUTH_ROUTE + REGISTRATION_ROUTE,
};
