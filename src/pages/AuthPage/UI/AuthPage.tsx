import { FC } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { AuthByPhoneOrEmail } from "@/features/AuthByPhoneOrEmail";
import { PasswordRecovery } from "@/features/PasswordRecovery";
import { Registration } from "@/features/Registration";
import { RegistrationGreeting } from "@/features/RegistrationGreeting";
import { RegistrationGreetingAgreement } from "@/features/RegistrationGreeting/UI/RegistrationGreetingAgreement";
import { publicRoutePaths } from "@/shared/config/routes";
import { Auth } from "@/widgets/Auth";

const AuthPage: FC = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			<Route index element={<Auth />} />
			<Route path={publicRoutePaths.login} element={<AuthByPhoneOrEmail />} />
			<Route path={publicRoutePaths.registration} element={<Registration />} />
			<Route
				path={publicRoutePaths.registrationGreeting}
				element={<RegistrationGreeting />}
			/>
			<Route
				path={publicRoutePaths.registrationAgreement}
				element={<RegistrationGreetingAgreement />}
			/>
			<Route
				path={publicRoutePaths.password_recovery}
				element={<PasswordRecovery />}
			/>
			<Route path="*" element={<Auth />} />
		</Routes>
	);
};

export default AuthPage;
