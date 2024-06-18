import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./Registration.module.scss";

interface RegistrationProps {}

export const Registration: FC<RegistrationProps> = () => {
	const navigate = useNavigate();

	const onNavigateToRegistrationGreeting = () => {
		navigate(publicRoutePaths.authRegistrationGreeting);
	};
	const onNavigateToAuth = () => {
		navigate(publicRoutePaths.authLogin);
	};

	return (
		<div className={s.Registration}>
			<div className={s.btns}>
				<UI.Button onClick={onNavigateToRegistrationGreeting} size="fullwidth">
					Я новый пользователь
				</UI.Button>
				<UI.Button
					onClick={onNavigateToAuth}
					variant="outlined"
					size="fullwidth"
				>
					У меня уже есть аккаунт
				</UI.Button>
				<UI.Button variant="outlined" size="fullwidth">
					Продолжить регистрацию
				</UI.Button>
			</div>
			<p className={s.description}>
				Нажимая "Продолжить", вы соглашаетесь с{" "}
				<u>Постановлением и условиями и политика конфиденциальности</u>
			</p>
		</div>
	);
};
