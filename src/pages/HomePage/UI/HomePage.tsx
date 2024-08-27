import { FC } from "react";

import { Link } from "react-router-dom";

import { EatingInfoCard, useFoodStore } from "@/entities/food";
import { WaterInfo } from "@/entities/food/UI/WaterInfo";
import { CaloriesCharts } from "@/features/CaloriesCharts";
import { protectedRoutePaths } from "@/shared/config/routes";
import { Header } from "@/widgets/Header";

const HomePage: FC = () => {
	const { eatingMap } = useFoodStore();

	return (
		<div>
			<Header />
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
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<Link to={protectedRoutePaths.medicines}>
					<EatingInfoCard
						opening={false}
						bg="#ECE3FD"
						title="Медикаменты"
						iconSrc={"/icons/eggs.svg"}
					/>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
