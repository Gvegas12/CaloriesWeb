import { useCallback } from "react";

import { Controller, Control } from "react-hook-form";

import { UIBaseFieldText } from "../../UIBaseFieldText";
import { UIBaseFieldTextProps } from "../../UIBaseFieldText/UI/UIBaseFieldText";

export interface UIFieldTextProps extends UIBaseFieldTextProps {
	control: Control<any>;
	name: string;
}

export const UIFieldText: React.FC<UIFieldTextProps> = ({
	name,
	control,
	...props
}) => {
	const transform = {
		input: useCallback(
			(value: any) => {
				if (props.type === "number") {
					return isNaN(value) || value === null || value === 0
						? ""
						: value.toString();
				}

				return value || "";
			},
			[props.type],
		),
		output: useCallback(
			(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				const v = e.target.value;

				if (props.type === "number") {
					const output = parseInt(v, 10);
					return isNaN(output) ? 0 : output;
				}

				return v;
			},
			[props.type],
		),
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { ref, ...field } }) => {
				return (
					<UIBaseFieldText
						{...props}
						name={field.name}
						onBlur={field.onBlur}
						onChange={(e) => field.onChange(transform.output(e))}
						value={transform.input(field.value)}
						innerRef={ref}
					/>
				);
			}}
		/>
	);
};
