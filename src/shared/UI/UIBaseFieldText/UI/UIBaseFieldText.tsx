import { FC, Ref } from "react";

import { Input, InputProps } from "antd";
import clsx from "clsx";

import s from "./UIBaseFieldText.module.scss";

export interface UIBaseFieldTextProps extends InputProps {
	innerRef?: Ref<any>;
}

export const UIBaseFieldText: FC<UIBaseFieldTextProps> = ({
	innerRef,
	value,
	className,
	...props
}) => (
	<Input
		className={clsx(s.UIBaseFieldText, className)}
		value={value}
		ref={innerRef}
		variant="outlined"
		{...props}
	/>
);
