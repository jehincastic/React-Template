import { BaseInput } from "./BaseInput";
import { combineClasses } from "../../utils";

export const Select = ({
	name,
	label,
	error,
	options,
	className,
	isMandatory,
	placeholder,
	formTransaltion,
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
			<select
				name={name}
				defaultValue=""
				className={combineClasses("select select-bordered", error && "!input-error")}
				{...formProps}
			>
				<option value="" disabled hidden>
					{placeholder}
				</option>
				{
					options.map(({ label: optLabel, value }) => (
						<option key={value} value={value}>{optLabel}</option>
					))
				}
			</select>
		</BaseInput>
	);
};
