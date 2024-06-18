import { FC } from "react";

import Cross from "./cross_icon.svg?react";

import s from "./UICloseButton.module.scss";

interface UICloseButtonProps {
	onClick: any;
}

export const UICloseButton: FC<UICloseButtonProps> = ({ onClick }) => {
	return (
		<div onClick={onClick} className={s.UICloseButton}>
			<Cross />
		</div>
	);
};
