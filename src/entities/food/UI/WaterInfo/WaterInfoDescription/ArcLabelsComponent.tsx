import { FC } from "react";

interface ArcLabelsComponentProps {
	svgStyle: any;
	datum: any;
	label: string;
}

export const ArcLabelsComponent: FC<ArcLabelsComponentProps> = ({
	datum,
	label,
	svgStyle,
}) => {
	return (
		<g
			transform={svgStyle.transform.get()}
			style={{
				pointerEvents: "none",
			}}
		>
			<text
				transform={`translate(0,-15)`}
				textAnchor="middle"
				dominantBaseline="central"
				fill={svgStyle.textColor}
				style={{
					fontSize: 10,
					fontWeight: 700,
				}}
			>
				{label}
			</text>
			<text
				transform={`translate(-2,0)`}
				textAnchor="middle"
				dominantBaseline="central"
				fill={svgStyle.textColor}
				style={{
					fontSize: 10,
					fontWeight: 700,
				}}
			>
				{datum.label}
			</text>
		</g>
	);
};
