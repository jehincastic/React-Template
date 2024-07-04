import { MandatoryMark } from "./MandatoryMark";
import { combineClasses } from "../../utils";

export const BaseInput = ({
	className, label, error,
	isMandatory, children,
	formTransaltion,
}) => {
	return (
		<label className={combineClasses("form-control w-full ", className)}>
			<div className="label">
				<span className="label-text font-semibold">
					{label}
					<MandatoryMark isMandatory={isMandatory} />
				</span>
			</div>
			{children}
			{error?.message && (
				<div className="label">
					<span className="label-text-alt text-error">
						{formTransaltion(error.message)}
					</span>
				</div>
			)}
		</label>
	);
};
