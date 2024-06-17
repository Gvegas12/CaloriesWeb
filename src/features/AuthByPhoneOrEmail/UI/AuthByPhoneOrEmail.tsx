import { FC, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { LoginVariant } from "@/entities/auth";

import { Btns } from "./Btns";
import { Fields } from "./Fields";
import { AuthSwitchButtons } from "./SwitchButtons";
import { ToRegistration } from "./ToRegistration";

import s from "./AuthByPhoneOrEmail.module.scss";

const validationSchema = z.object({
	email: z.string().email(),
	firstName: z.string().email(),
});

export type AuthByPhoneOrEmailFrom = z.infer<typeof validationSchema>;

const defaultValues = {
	email: "",
	firstName: "",
};

interface AuthByPhoneOrEmailProps {}

export const AuthByPhoneOrEmail: FC<AuthByPhoneOrEmailProps> = () => {
	const [loginVariant, setLoginVariant] = useState<LoginVariant>("email");

	// const navigate = useNavigate();
	// const { fetchLogin } = useAuthStore();

	const form = useForm<AuthByPhoneOrEmailFrom>({
		mode: "all",
		defaultValues,
		resolver: zodResolver(validationSchema),
	});

	const {
		control,
		formState: { errors, disabled, isValid },
		// watch,
	} = form;

	const onSubmitHandler = async () => {
		// const { email, firstName } = watch();
		// await fetchLogin.performPromise({ email, firstName });
		// navigate(protectedRoutePaths.home);
	};

	return (
		<FormProvider {...form}>
			<form className={s.AuthByPhoneOrEmail}>
				<div className={s.body}>
					<p className={s.title}>Вход в личный кабинет</p>
					<AuthSwitchButtons getLoginVariant={setLoginVariant} />
					<Fields control={control} loginVariant={loginVariant} />
					<p className={s.errorMessage}>
						{errors.email?.message || errors.firstName?.message}
					</p>
					<Btns
						isDisabled={disabled || isValid}
						onSubmitHandler={onSubmitHandler}
					/>
				</div>
				<ToRegistration />
			</form>
		</FormProvider>
	);
};
