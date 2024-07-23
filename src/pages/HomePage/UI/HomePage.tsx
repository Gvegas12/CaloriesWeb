import { FC } from "react";

import {
	FoodInfoCalendar,
	EatingInfoCard,
	useFoodStore,
} from "@/entities/food";
import { WaterInfo } from "@/entities/food/UI/WaterInfo";
import { CaloriesCharts } from "@/features/CaloriesCharts";

const HomePage: FC = () => {
	const { eatingMap } = useFoodStore();

	return (
		<div>
			<div
				style={{
					marginBottom: "20px",
				}}
			>
				<FoodInfoCalendar />
			</div>
			<CaloriesCharts /> {/* TODO Waffle Nivo */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginTop: "10px",
					rowGap: "10px",
				}}
			>
				{eatingMap.map((eatingInfo, i) => (
					<EatingInfoCard
						key={i}
						title={eatingInfo.title}
						description={eatingInfo.kcal}
						iconSrc={eatingInfo.iconSrc}
						bg={eatingInfo.color}
					/>
				))}
			</div>
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<WaterInfo />
			</div>
		</div>
	);
};

export default HomePage;
