import {
	Children,
	FC,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	cloneElement,
	useEffect,
	useState,
} from "react";

import clsx from "clsx";

import { SwitchButtonProps } from "./SwitchButton/UI";

import s from "./UISwitchButtons.module.scss";

interface UISwitchButtonsProps extends PropsWithChildren {
	className?: string;
}

export const UISwitchButtons: FC<UISwitchButtonsProps> = ({
	className,
	children,
}) => {
	const [activeButtonId, setActiveButtonId] = useState<string | undefined>();
	const [childs, setChilds] = useState<ReactNode>();

	useEffect(() => {
		setChilds(
			Children.map(children, (child, i) =>
				cloneElement<SwitchButtonProps>(
					child as ReactElement<SwitchButtonProps>,
					{
						getButtonId: (id) => {
							if (i === 0) setActiveButtonId(id);
						},
						activeButtonId,
						onClickForItem: setActiveButtonId,
					},
				),
			),
		);
	}, [children, activeButtonId]);

	return <div className={clsx(s.UISwitchButtons, className)}>{childs}</div>;
};
