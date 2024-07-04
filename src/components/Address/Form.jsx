import { useTranslation } from "react-i18next";

import { Button, Input } from "../Base";
import { useForm } from "../../hooks";
import { AddressSchema } from "../../schema";
import { getInputFieldProps } from "../../utils";

export const AddressForm = ({ initialValue, formConfig, handleUpdate }) => {
	const { t } = useTranslation(["address"]);
	const {
		errors,
		handleSubmit,
		getFormProps,
	} = formConfig ?? useForm({
		initialValue,
		schema: AddressSchema,
		defaultValue: {
			lineOne: "",
			lineTwo: "",
			lineThree: "",
			city: "",
			state: "",
			country: "",
			postalCode: null,
		},
	});

	return (
		<form onSubmit={handleSubmit(handleUpdate)} className="w-full">
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "lineOne",
					isMandatory: true,
				})}
			/>
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "lineTwo",
				})}
			/>
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "lineThree",
				})}
			/>
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "city",
					isMandatory: true,
				})}
			/>
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "state",
					isMandatory: true,
				})}
			/>
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "country",
					isMandatory: true,
				})}
			/>
			<Input
				{...getInputFieldProps({
					t,
					errors,
					getFormProps,
					name: "postalCode",
					type: "number",
					isMandatory: true,
				})}
			/>
			<Button className="w-full mt-5">
				{initialValue ? t("action.update") : t("action.new")}
			</Button>
		</form>
	);
};
