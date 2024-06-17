/**
 * Образ жизни пользователя
 *
 * sedentary - Сидячий
 *
 * inactive - Малоактивный
 *
 * active - Активный
 *
 * very_active - Очень активный
 */
export type UserLifestyle = "sedentary" | "inactive" | "active" | "veryActive";

export interface User {
	id: number;
	firstName: string;
	secondName: string;
	middleName: string;
	email: string;
	phoneNumber: string;
	height: number;
	weight: number;
	weightPurpose: number;
	lifestyle: UserLifestyle;
}
