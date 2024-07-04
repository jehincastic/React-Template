export const getInputFieldProps = ({
	name, type = "text", isMandatory = false,
	icon = null, t: translate, autoComplete,
	errors, getFormProps, label,
}) => {
	const propsObj = type === "number" ? { valueAsNumber: true } : undefined;
	return {
		type,
		isMandatory,
		autoComplete,
		placeholder: translate(`fields.${name}.placeholder`),
		label: label ?? translate(`fields.${name}.name`),
		error: errors?.[name],
		formProps: getFormProps(name, propsObj),
		formTransaltion: translate,
		prefixIcon: icon,
	};
};

export const getCheckBoxProps = ({
	name, errors, getFormProps,
	t: translate, label,
}) => {
	return {
		label: label ?? translate(`fields.${name}.name`),
		error: errors?.[name],
		formTransaltion: translate,
		formProps: getFormProps(name),
	};
};

export const getSelectFieldProps = ({
	name, isMandatory = false, autoComplete,
	t: translate, errors, getFormProps, label, options,
}) => {
	return {
		options,
		isMandatory,
		autoComplete,
		placeholder: translate(`fields.${name}.placeholder`),
		label: label ?? translate(`fields.${name}.name`),
		error: errors?.[name],
		formProps: getFormProps(name),
		formTransaltion: translate,
	};
};