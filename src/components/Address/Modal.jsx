import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { AddressForm } from "./Form";
import { Button } from "../Base";
import { Icon } from "../../icons";
import { useForm } from "../../hooks";
import { AddressSchema } from "../../schema";

const AddressModalComp = (props, ref) => {
	const { initialValue, handleUpdate } = props;
	const { t } = useTranslation(["address"]);
	const addressForm = useForm({
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
		<dialog
			ref={ref}
			onClose={() => addressForm.resetFrom()}
			className="modal modal-bottom sm:modal-middle"
		>
			<div className="modal-box">
				<div className="flex justify-between">
					<h3 className="font-bold text-lg">
						{initialValue ? t("action.update") : t("action.new")}
					</h3>
					<form method="dialog">
						<Button
							className="btn btn-sm btn-circle btn-ghost"
							type="submit"
						>
							<Icon name="Close" />
						</Button>
					</form>
				</div>
				<AddressForm
					initialValue={initialValue}
					formConfig={addressForm}
					handleUpdate={handleUpdate}
				/>
			</div>
		</dialog>
	);
};

export const AddressModal = forwardRef(AddressModalComp);
