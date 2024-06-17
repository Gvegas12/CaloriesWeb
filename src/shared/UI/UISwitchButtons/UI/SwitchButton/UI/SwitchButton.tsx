import { FC, PropsWithChildren, useEffect, useId } from "react";

import clsx from "clsx";

import s from "./SwitchButton.module.scss";

export interface SwitchButtonProps extends PropsWithChildren {
	activeButtonId?: string;
	getButtonId?: (id: string) => void;
	onClick?: () => void;
	onClickForItem?: (id: string) => void;
}

export const SwitchButton: FC<SwitchButtonProps> = ({
	children,
	activeButtonId,
	getButtonId,
	onClick,
	onClickForItem,
}) => {
	const id = useId();

	useEffect(() => {
		getButtonId?.(id);
	}, []);

	return (
		<div
			onClick={() => {
				onClick?.();
				onClickForItem?.(id);
			}}
			className={clsx(s.SwitchButton, activeButtonId === id && s.active)}
		>
			{children}
		</div>
	);
};
