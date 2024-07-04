import { combineClasses } from "../../utils";

export const Button = ({
	type,
	dashed,
	loading,
	onClick,
	btnType,
	children,
	className,
}) => {
	return (
		<button
			type={type}
			className={combineClasses("btn", btnType && `btn-${btnType}`, dashed && "btn-outline border-2 border-dashed", className)}
			onClick={onClick}
		>
			{
				loading
					? (
						<span className="loading loading-spinner"></span>
					) : (
						<>
							{children}
						</>
					)
			}
		</button>
	);
};
