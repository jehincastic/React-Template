import { useRef } from "react";
import { useTranslation } from "react-i18next";

import {
	AddressModal, Button, Card,
	HeaderWithLogo, Input, Select,
} from "../../../components";
import { COMPANY_TYPES } from "../../../constants";
import { useForm } from "../../../hooks";
import { Icon } from "../../../icons";
import { OnboardingSetupSchema } from "../../../schema";
import { getInputFieldProps, getSelectFieldProps } from "../../../utils";
import { ViewAddress } from "../../../components/Address/View";

export const SetupAccount = () => {
	const { t } = useTranslation(["onboarding"]);
	const modalRef = useRef();
	const {
		errors,
		handleSubmit,
		getFormProps,
		setFieldValue,
		watchFieldValue,
	} = useForm({
		schema: OnboardingSetupSchema,
		defaultValue: { name: "", type: "", address: null },
	});

	const address = watchFieldValue("address");

	const updateAddress = (value) => {
		setFieldValue("address", value);
		modalRef.current?.close();
	};

	const submitForm = (data) => {
		// eslint-disable-next-line no-console
		console.log(data);
	};

	const openModel = () => {
		modalRef?.current?.showModal();
	};

	return (
		<div className="flex flex-col text-center items-center">
			<HeaderWithLogo
				title={t("setup.title")}
				subTitle={t("setup.subTitle")}
				className="pt-16"
				hideLogo
			/>
			<Card centerChildren className="w-full sm:w-[80%] md:w-[50%] lg:w-[35%] mb-16">
				<form onSubmit={handleSubmit(submitForm)} className="w-full">
					<Input
						{...getInputFieldProps({
							t,
							errors,
							getFormProps,
							name: "name",
							isMandatory: true,
						})}
					/>
					<Select
						{...getSelectFieldProps({
							t,
							errors,
							getFormProps,
							name: "type",
							isMandatory: true,
							options: COMPANY_TYPES,
						})}
					/>
					{
						address
							? (
								<ViewAddress
									address={address}
									editHandler={openModel}
									removeHandler={() => updateAddress(null)}
								/>
							) : (
								<Button
									className="w-full mt-5"
									dashed
									onClick={openModel}
									type="button"
								>
									<Icon name="Add" size="18" width="18" /> {t("setup.address")}
								</Button>
							)
					}
					<Button
						className="w-full mt-5"
						type="submit"
					>
						{t("setup.action")}
					</Button>
				</form>
			</Card>
			<AddressModal
				handleUpdate={updateAddress}
				ref={modalRef}
				initialValue={address}
				key={address}
			/>
		</div>
	);
};
