import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { publicRoutePaths } from "@/shared/config/routes";
import UI from "@/shared/UI";

import s from "./RegistrationGreeting.module.scss";

interface RegistrationGreetingAgreementProps {}

export const RegistrationGreetingAgreement: FC<
	RegistrationGreetingAgreementProps
> = () => {
	const navigate = useNavigate();

	const onNavigateToRegistration = () => {
		navigate(publicRoutePaths.authRegistration);
	};

	return (
		<div className={s.RegistrationGreeting}>
			<div className={s.wrapper}>
				<div className={s.header_box}>
					<UI.CloseButton onClick={onNavigateToRegistration} />
					<div className={s.border} />
					<div className={s.scroll}>
						<p className={s.title_agreement}>Прежде чем начать</p>
						<p className={s.text_agreement}>
							Наша миссия - помочь вам достигнуть своих целей в области питания,
							предоставив соответствующие инструменты и поддержку. Для этого мы
							собираем и используем ваши данные несколькими способами. Наша
							политика конфиденциальности содержит полную информацию об
							использовании этих данных и ваших правах, связанных с ними.
						</p>
						<p className={s.title_agreement}>Как мы используем ваши данные</p>
						<ol>
							<li>
								Мы используем ваши личные данные и данные о состояние здоровья
								для предоставления вам целевых показателей в области питания
								(например, показатель рекомендуемого суточного потребления
								калорий или РСК), а также персонализированных рекомендация по
								питанию.
							</li>
							<li>
								Мы используем данные о вашей активности в приложении, чтобы
								отправлять вам образовательные материалы о еде и питание в более
								широком смысле, а также руководства о том, как максимально
								эффективно использовать функции приложения.
							</li>
							<li>
								Мы используем общие аналитические данные, чтобы улучшить нашу
								платформу благодаря понимаю того, как наши пользователи
								используют функции в нашем приложении.
							</li>
						</ol>
						<p className={s.text_agreement_shadow}>
							Нажимая “Да, я согласен (-на) ниже, вы подтверждаете, что
							ознакомились с политикой конфиденциальности и соглашаетесь на
							использование ваших данных в описанном выше порядке. Вы можете
							отозвать это разрешение в приложение в настройках “Общение и
							конфиденциальность” на странице “Я” в любое время.
						</p>
						<p className={s.link_agreement}>Политика конфиденциальности</p>
					</div>
					<div className={s.border} />
				</div>
				<div className={s.btns_agreement}>
					<UI.Button
						size="fullwidth"
						color="black"
						onClick={onNavigateToRegistration}
					>
						Да, я согласен (-на)
					</UI.Button>
					<UI.Button size="fullwidth" onClick={onNavigateToRegistration}>
						Нет, я несогласен (-на)
					</UI.Button>
				</div>
			</div>
		</div>
	);
};
