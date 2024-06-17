import { FC, ReactNode, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AuthService } from "@/entities/auth";

const { useAuthStore } = AuthService;

interface IProtectedRoutesProxyProps {
	children: ReactNode;
}

export const ProtectedRoutesProxy: FC<IProtectedRoutesProxyProps> = ({
	children,
}) => {
	const navigate = useNavigate();
	const { isAuth, checkIsAuth } = useAuthStore();

	useEffect(() => {
		checkIsAuth(navigate);
	}, [navigate]);

	if (isAuth) return children;
};
