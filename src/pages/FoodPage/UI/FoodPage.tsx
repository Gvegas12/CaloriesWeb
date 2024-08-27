import { FC } from "react";

import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

import { foodElementsMap } from "@/entities/food";
import UI from "@/shared/UI";

import BackIcon from "./img/back.svg?react";
import FavoriteIcon from "./img/favorite-bookmark.svg?react";
import MockFoodImg from "./img/mock-food-img.png";
import { NutritionalValue } from "./NutritionalValue";
import { Vitamins } from "./Vitamins/Vitamins";

import s from "./FoodPage.module.scss";

const FoodPage: FC = () => {
	const navigate = useNavigate();

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const toBackHandler = () => {
		navigate(-1);
	};

	return (
		<div>
			<BackIcon onClick={toBackHandler} />
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
				<div className={s.barChart}>
					<UI.BarLine
						className={s.barLine}
						color={foodElementsMap.calories.color}
						name={foodElementsMap.calories.name}
						total={70}
						value={10}
					/>
					<UI.BarLine
						className={s.barLine}
						color={foodElementsMap.protein.color}
						name={foodElementsMap.protein.name}
						total={70}
						value={10}
					/>
					<UI.BarLine
						className={s.barLine}
						color={foodElementsMap.fats.color}
						name={foodElementsMap.fats.name}
						total={70}
						value={10}
					/>
					<UI.BarLine
						className={s.barLine}
						color={foodElementsMap.carbohydrates.color}
						name={foodElementsMap.carbohydrates.name}
						total={70}
						value={10}
					/>
				</div>
				<UI.Button color="black" size="fullwidth" className={s.btn}>
					Добавить
				</UI.Button>
				<NutritionalValue />
				<Vitamins
					data={[
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
						{
							name: "Витамин A",
							value: "200 mg",
						},
					]}
				/>
			</div>
		</div>
	);
};

export default FoodPage;
