import { FC } from "react";

import { LoginVariant } from "@/entities/auth";
import UI from "@/shared/UI";

interface SwitchButtonsProps {
	getLoginVariant: (v: LoginVariant) => void;
}

export const AuthSwitchButtons: FC<SwitchButtonsProps> = ({
	getLoginVariant,
}) => (
	<UI.SwitchButtons.Wrapper>
		<UI.SwitchButtons.Button onClick={() => getLoginVariant("email")}>
			Почта
		</UI.SwitchButtons.Button>
		<UI.SwitchButtons.Button onClick={() => getLoginVariant("login")}>
			Телефон
		</UI.SwitchButtons.Button>
	</UI.SwitchButtons.Wrapper>
);
