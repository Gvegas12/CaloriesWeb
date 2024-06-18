import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./RegistrationGreeting.module.scss";

interface RegistrationGreetingProps {}

export const RegistrationGreeting: FC<RegistrationGreetingProps> = () => {
	const navigate = useNavigate();

	const onNavigateToRegistration = () => {
		navigate(publicRoutePaths.authRegistration);
	};

	const onNavigateToRegistrationAgreement = () => {
		navigate(publicRoutePaths.authRegistrationAgreement);
	};

	return (
		<div className={s.RegistrationGreeting}>
			<div className={s.wrapper}>
				<div className={s.header_box}>
					<UI.CloseButton onClick={onNavigateToRegistration} />
					<p className={s.title}>Привет!</p>
					<p className={s.text}>Я твой гид питания</p>
					<p className={s.description}>
						Со мной ты сможешь легко вести подсчет калорий, составлять меню из
						вкусных блюд и следить за питательным балансом.
					</p>
				</div>
				<div className={s.btn}>
					<p className={s.description}>
						Я помогу тебе с планированием тренировок, контролем веса и
						поддержанием здорового образа жизни.
					</p>
					<UI.SwipeButton onEnd={onNavigateToRegistrationAgreement} />
				</div>
			</div>
		</div>
	);
};
