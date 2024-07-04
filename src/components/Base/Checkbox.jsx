import { combineClasses } from "../../utils";

export const Checkbox = ({
	label,
	error,
	name,
	className,
	formTransaltion,
	formProps = {},
}) => {
	return (
		<div className={combineClasses("form-control", className)}>
			<label className="label cursor-pointer">
				<input
					name={name}
					type="checkbox"
					defaultChecked={false}
					className="checkbox"
					{...formProps}
				/>
				&nbsp;
				&nbsp;
				<span className="label-text">{label}</span>
			</label>
			{
				error?.message && (
					<div className="label">
						<span className="label-text-alt text-error">
							{formTransaltion(error.message)}
						</span>
					</div>
				)
			}
		</div>
	);
};
