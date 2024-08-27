import { FC } from "react";

import { foodElementsMap } from "@/entities/food";

import { NutritionalTable } from "./NutritionalTable/NutritionalTable";

import s from "./NutritionalValue.module.scss";

interface NutritionalValueProps {}

export const NutritionalValue: FC<NutritionalValueProps> = () => {
	return (
		<div className={s.NutritionalValue}>
			<p className={s.title}>Пищевая ценность</p>
			<div className={s.tables}>
				<NutritionalTable
					name={foodElementsMap.protein.name}
					color={foodElementsMap.protein.color}
					total="5.42 г"
					data={[
						{
							name: "Натрий",
							value: "3.82 г",
						},
						{
							name: "Холестерин",
							value: "182 г",
						},
						{
							name: "Калий",
							value: "58 г",
						},
					]}
				/>
				<NutritionalTable
					name={foodElementsMap.fats.name}
					color={foodElementsMap.fats.color}
					total="5.42 г"
					data={[
						{
							name: "Натрий",
							value: "3.82 г",
						},
						{
							name: "Холестерин",
							value: "182 г",
						},
						{
							name: "Калий",
							value: "58 г",
						},
					]}
				/>
				<NutritionalTable
					name={foodElementsMap.carbohydrates.name}
					color={foodElementsMap.carbohydrates.color}
					total="5.42 г"
					data={[
						{
							name: "Натрий",
							value: "3.82 г",
						},
						{
							name: "Холестерин",
							value: "182 г",
						},
					]}
				/>{" "}
			</div>
		</div>
	);
};
