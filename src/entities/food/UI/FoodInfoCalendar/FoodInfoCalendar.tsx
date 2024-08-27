import { FC, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";

import CalendarIcon from "@icons/calendar.svg?react";

import s from "./FoodInfoCalendar.module.scss";

interface FoodInfoCalendarProps {}

export const FoodInfoCalendar: FC<FoodInfoCalendarProps> = () => {
	const [openCalendar, setOpenCalendar] = useState(false);

	const onToggleCalendar = () => {
		setOpenCalendar(!openCalendar);
	};

	return (
		<div className={s.FoodInfoCalendar}>
			<DatePicker open={openCalendar} onOpenChange={setOpenCalendar} />
			<CalendarIcon onClick={onToggleCalendar} />
			<p className={s.day}>Сегодня</p> {/* TODO mock */}
			<SearchOutlined />
		</div>
	);
};
