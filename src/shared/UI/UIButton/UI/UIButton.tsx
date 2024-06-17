import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import clsx from "clsx";

import { UILoader } from "../../UILoader";

import styles from "./UIButton.module.scss";

export type UIButtonVariant = "filled" | "outlined" | "clear";
type UIButtonSize = "small" | "medium" | "large" | "fullwidth";
type UIButtonColor = "error" | "primary" | "black";

export interface IUIButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	variant?: UIButtonVariant;
	color?: UIButtonColor;
	size?: UIButtonSize;
	isLoading?: boolean;
}

export const UIButton: FC<IUIButtonProps> = ({
	className,
	children,
	size = "medium",
	color = "primary",
	variant = "filled",
	disabled,
	isLoading,
	...props
}) => {
	const isDisabled = disabled || isLoading;
	return (
		<button
			disabled={isDisabled}
			className={clsx(
				styles.UIButton,
				styles[size],
				styles[color],
				styles[variant],
				isDisabled && styles.disabled,
				className,
			)}
			{...props}
		>
			{isLoading && <UILoader className={styles.loader} />}
			{children}
		</button>
	);
};
