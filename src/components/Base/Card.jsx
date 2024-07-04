import { combineClasses } from "../../utils";

export const Card = ({
	title,
	children,
	className,
	bodyClass,
	titleClass,
	centerChildren,
}) => {
	return (
		<div className={combineClasses("card bg-base-100 w-96 sm:shadow-xl", className)}>
			<div className={combineClasses("card-body", centerChildren && "items-center", bodyClass)}>
				{title && <h2 className={combineClasses("card-title", titleClass)}>{title}</h2>}
				{children}
			</div>
		</div>
	);
};
