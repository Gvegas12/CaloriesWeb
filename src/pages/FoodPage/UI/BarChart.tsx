import { FC } from "react";

import { ResponsiveBar } from "@nivo/bar";

const data = [
	{
		data: 356,
	},
	{
		data: 123,
	},
	{
		data: 123,
	},
	{
		data: 564,
	},
	{
		data: 645,
	},
	{
		data: 212,
	},
];

interface BarChartProps {}

export const BarChart: FC<BarChartProps> = () => {
	return (
		<div style={{ width: "100%", height: 200 }}>
			<ResponsiveBar
				data={data}
				keys={["data"]}
				indexBy="data"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				axisTop={null}
				axisRight={null}
				axisLeft={null}
			/>
		</div>
	);
};
