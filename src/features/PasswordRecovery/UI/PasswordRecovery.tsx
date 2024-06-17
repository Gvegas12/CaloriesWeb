import { FC, MouseEvent } from "react";

import { useNavigate } from "react-router-dom";

import UI from "@/shared/UI";

import s from "./PasswordRecovery.module.scss";

interface PasswordRecoveryProps {}

export const PasswordRecovery: FC<PasswordRecoveryProps> = () => {
	const navigate = useNavigate();

	const onClickToBack = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<form className={s.PasswordRecovery}>
			<p className={s.title}>Восстановление пароля</p>
			<p className={s.description}>
				Введите адрес электронной почты или имя пользователя, с которым связан
				ваша учётная запись
			</p>
			<UI.BaseFieldText />
			<UI.Button
				className={s.btn}
				size="fullwidth"
				variant="filled"
				color="black"
			>
				Продолжить
			</UI.Button>
			<UI.Button
				onClick={onClickToBack}
				className={s.btn}
				size="fullwidth"
				variant="outlined"
				color="black"
			>
				Назад
			</UI.Button>
		</form>
	);
};
