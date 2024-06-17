import { FC } from "react";

import { Link } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";

import s from "./AuthByPhoneOrEmail.module.scss";

interface ToRegistrationProps {}

export const ToRegistration: FC<ToRegistrationProps> = () => (
	<p className={s.toRegistration}>
		Не зарегистрированы?{" "}
		<Link className={s.link} to={publicRoutePaths.authRegistration}>
			Создать учётную запись
		</Link>
	</p>
);
