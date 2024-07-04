import { Trans, useTranslation } from "react-i18next";

import { Button, Card, Checkbox, FooterWithTerms, HeaderWithLogo, Input, Link } from "../../components";
import { ROUTERS } from "../../constants";
import { useForm } from "../../hooks";
import { SignupSchema } from "../../schema";
import { getCheckBoxProps, getInputFieldProps } from "../../utils";

export const Signup = () => {
	const { t } = useTranslation(["auth"]);
	const {
		errors,
		handleSubmit,
		getFormProps,
	} = useForm({
		schema: SignupSchema,
		defaultValue: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			terms: false,
		},
	});

	const submitForm = (data) => {
		// eslint-disable-next-line no-console
		console.log(data);
	};

	return (
		<div className="flex flex-col text-center justify-center items-center">
			<HeaderWithLogo title={t("title")} subTitle={t("subTitle")} />
			<Card centerChildren className="w-full sm:w-[80%] md:w-[50%] lg:w-[35%] mb-16">
				<form onSubmit={handleSubmit(submitForm)} className="w-full">
					<Input
						{...getInputFieldProps({
							t,
							errors,
							getFormProps,
							name: "name",
							isMandatory: true,
							icon: "User",
						})}
					/>
					<Input
						{...getInputFieldProps({
							t,
							errors,
							getFormProps,
							name: "email",
							type: "email",
							autoComplete: "email",
							isMandatory: true,
							icon: "Email",
						})}
					/>
					<Input
						{...getInputFieldProps({
							t,
							errors,
							getFormProps,
							name: "password",
							type: "password",
							autoComplete: "password",
							isMandatory: true,
							icon: "Password",
						})}
					/>
					<Input
						{...getInputFieldProps({
							t,
							errors,
							getFormProps,
							name: "confirmPassword",
							autoComplete: "password",
							type: "password",
							isMandatory: true,
							icon: "Password",
						})}
					/>
					<div className="flex mt-3">
						<Checkbox
							{...getCheckBoxProps({
								name: "terms", errors,
								getFormProps, t,
								label: (
									<Trans t={t} i18nKey="fields.terms.name">
										I agree with the&nbsp;
										<Link href={ROUTERS.EXTERNAL.LANDING.TERMS}>Terms and conditions</Link>.
									</Trans>
								),
							})}
						/>
					</div>
					<Button
						className="w-full mt-3"
						type="submit"
					>
						{t("signup.action")}
					</Button>
					<div className="mt-4">
						{t("signup.subMessage")}&nbsp;
						<Link href={ROUTERS.AUTH.LOGIN}>
							{t("signup.subAction")}
						</Link>
					</div>
				</form>
			</Card>
			<FooterWithTerms />
		</div>
	);
};
