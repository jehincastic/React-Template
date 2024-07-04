import { BaseInput } from "./BaseInput";
import { combineClasses } from "../../utils";
import { Icon } from "../../icons";

export const Input = ({
	name,
	error,
	label,
	className,
	isMandatory,
	placeholder,
	autoComplete,
	formTransaltion,
	prefixIcon,
	type = "text",
	formProps = {},
}) => {
	return (
		<BaseInput
			className={className}
			label={label}
			error={error}
			isMandatory={isMandatory}
			formTransaltion={formTransaltion}
		>
			{
				prefixIcon
					? (
						<label className="input input-bordered flex items-center">
							<Icon name={prefixIcon} className="opacity-70" />
							<input
								type={type}
								name={name}
								placeholder={placeholder}
								autoComplete={autoComplete}
								className={combineClasses("input-md w-full", error && "input-error")}
								{...formProps}
							/>
						</label>
					)
					: (
						<input
							type={type}
							name={name}
							placeholder={placeholder}
							autoComplete={autoComplete}
							className={combineClasses("input input-bordered input-md w-full", error && "input-error")}
							{...formProps}
						/>
					)
			}
		</BaseInput>
	);
};
