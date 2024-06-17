import { FC, useRef } from "react";

import { useDraggable } from "@neodrag/react";
import { Button } from "antd";

import ArrowsIcon from "./svg/arrows.svg?react";
import FireIcon from "./svg/fire_icon.svg?react";
import FireShadowIcon from "./svg/fire_icon_shadow.svg?react";

import s from "./UISwipeButton.module.scss";

interface UISwipeButtonProps {
	onEnd(): void;
}

export const UISwipeButton: FC<UISwipeButtonProps> = ({ onEnd }) => {
	const draggableRef = useRef(null);

	useDraggable(draggableRef, {
		axis: "x",
		bounds: "parent",
		onDragEnd: (data) => {
			if (data.offsetX > 160) {
				onEnd();
			}
		},
	});

	return (
		<div className={s.swiper}>
			<div className={s.wrapper}>
				<div ref={draggableRef}>
					<Button className={s.btn} type="text">
						<FireIcon />
					</Button>
				</div>
				<ArrowsIcon />
				<FireShadowIcon className={s.shadow} />
			</div>
		</div>
	);
};
