import { FC } from "react";

import { Control } from "react-hook-form";

import { LoginVariant } from "@/entities/auth";
import UI from "@/shared/UI";

import { AuthByPhoneOrEmailFrom } from "./AuthByPhoneOrEmail";

import s from "./AuthByPhoneOrEmail.module.scss";

interface FieldsProps {
	loginVariant: LoginVariant;
	control: Control<AuthByPhoneOrEmailFrom>;
}

export const Fields: FC<FieldsProps> = ({ control, loginVariant }) => {
	return (
		<div className={s.Fields}>
			<UI.FieldText
				placeholder={`Ваш ${loginVariant === "email" ? "почта" : "телефон"}`}
				control={control}
				name="firstName"
			/>
			<UI.FieldText
				style={{ marginTop: ".5rem" }}
				placeholder="Ваш пароль"
				control={control}
				name="email"
			/>
		</div>
	);
};
