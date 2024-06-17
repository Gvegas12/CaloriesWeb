import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./Auth.module.scss";

interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
	const navigate = useNavigate();

	const onNavigateToLogin = () => {
		navigate(publicRoutePaths.authLogin);
	};
	const onNavigateToRegistration = () => {
		navigate(publicRoutePaths.authRegistration);
	};

	return (
		<div className={s.Auth}>
			<div className={s.logo} />
			<div className={s.btns}>
				<UI.Button
					onClick={onNavigateToRegistration}
					variant="outlined"
					size="fullwidth"
				>
					Я новый пользователь
				</UI.Button>
				<UI.Button size="fullwidth" onClick={onNavigateToLogin}>
					У меня есть аккаунт
				</UI.Button>
			</div>
			<p className={s.description}>
				Нажимая "Продолжить", вы соглашаетесь с{" "}
				<u>Постановлением и условиями и политика конфиденциальности</u>
			</p>
		</div>
	);
};
