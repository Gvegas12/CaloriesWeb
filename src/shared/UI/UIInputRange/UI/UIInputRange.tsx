import { FC } from "react";

import { Slider, SliderSingleProps } from "antd";
import clsx from "clsx";

// import s from "./UIInputRange.module.scss";

// const formatter = (value: number) => `${value}%`;

interface UIInputRangeProps extends SliderSingleProps {}

export const UIInputRange: FC<UIInputRangeProps> = ({
	className,
	...props
}) => {
	return <Slider className={clsx(className)} {...props} />;
};
