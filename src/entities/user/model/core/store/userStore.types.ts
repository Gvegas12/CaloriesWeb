import { User } from "../../types/user.types";

export interface IUserStore {
	user: User | null;
	setUser: (data: User) => void;
}
