import { FC } from "react";

import { Select, SelectProps } from "antd";
import clsx from "clsx";

import s from "./UISelect.module.scss";

interface UISelectProps extends SelectProps {
	className?: string;
}

export const UISelect: FC<UISelectProps> = ({ className, ...props }) => {
	return <Select className={clsx(s.UISelect, className)} {...props} />;
};

/* 
const options = [
	{ value: "option1", label: "грамм" },
	{ value: "option2", label: "килограмм" },
	{ value: "option3", label: "миллилитр" },
	{ value: "option4", label: "литр" },
];

	const [isOpenState, setIsOpenState] = useState(false);

	const onToggleHandler = () => {
		setIsOpenState(!isOpenState);
	};

	return (
		<div className={s.selectWrapper}>
			<select  onClick={onToggleHandler} className={clsx(s.UISelect, className)}>
				{options.map(({ value, label }) => (
					<option key={value}>{label}</option>
				))}
			</select>
			<ChevronDownIcon className={clsx(s.chevron, isOpenState && s.open)} />
		</div>
	);
*/
