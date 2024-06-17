import { FC } from "react";

import { Link } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./AuthByPhoneOrEmail.module.scss";

interface BtnsProps {
	isDisabled: boolean;
	onSubmitHandler: () => void;
}

export const Btns: FC<BtnsProps> = ({ isDisabled, onSubmitHandler }) => {
	return (
		<div className={s.btns}>
			<UI.Button
				variant="filled"
				color="black"
				disabled={isDisabled}
				onClick={onSubmitHandler}
				size="fullwidth"
			>
				Войти
			</UI.Button>
			<Link
				className={s.recoveryPassword}
				to={publicRoutePaths.auth_password_recovery}
			>
				Вы забыли пароль?
			</Link>
		</div>
	);
};
