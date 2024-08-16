import { FC } from "react";

import { Divider } from "antd";

import UI from "@/shared/UI";

import { BarChart } from "./BarChart";
import BackIcon from "./img/back.svg?react";
import FavoriteIcon from "./img/favorite-bookmark.svg?react";
import MockFoodImg from "./img/mock-food-img.png";

import s from "./FoodPage.module.scss";

const FoodPage: FC = () => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};
	return (
		<div>
			<BackIcon />
			<div className={s.Header}>
				<p className={s.text_l1}>Жареное Яйцо</p>
				<FavoriteIcon />
			</div>
			<Divider />
			<div className={s.imgWrapper}>
				<img src={MockFoodImg} alt="" />
			</div>
			<div className={s.infoWrapper}>
				<p className={s.text_l1}>Размер порции</p>
				<div className={s.inputWrapper}>
					<UI.BaseFieldText className={s.input} />
					<UI.Select
						className={s.input}
						defaultValue="грамм"
						onChange={handleChange}
						options={[
							{ value: "грамм", label: "грамм" },
							{ value: "килограмм", label: "килограмм" },
							{ value: "миллилитр", label: "миллилитр" },
							{ value: "литр", label: "литр" },
						]}
					/>
				</div>
				<BarChart />
			</div>
		</div>
	);
};

export default FoodPage;
