import { useTranslation } from "react-i18next";

import {
	Input, Link,
	Button, Card, Checkbox,
	FooterWithTerms, HeaderWithLogo,
} from "../../components";
import { ROUTERS } from "../../constants";
import { useForm } from "../../hooks";
import { LoginSchema } from "../../schema";
import { getCheckBoxProps, getInputFieldProps } from "../../utils";

export const Login = () => {
	const { t } = useTranslation(["auth"]);
	const {
		errors,
		handleSubmit,
		getFormProps,
	} = useForm({
		schema: LoginSchema,
		defaultValue: {
			email: "",
			password: "",
			rememberMe: false,
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
							name: "email",
							isMandatory: true,
							autoComplete: "email",
							type: "email",
							icon: "Email",
						})}
					/>
					<Input
						{...getInputFieldProps({
							t,
							errors,
							getFormProps,
							name: "password",
							isMandatory: true,
							autoComplete: "password",
							type: "password",
							icon: "Password",
						})}
					/>
					<div className="flex flex-row justify-between items-center mt-3">
						<Checkbox
							{...getCheckBoxProps({
								name: "rememberMe", errors,
								getFormProps, t,
							})}
						/>
						<Link href={ROUTERS.AUTH.FORGOT_PASSWORD}>{t("login.forgotPassword")}</Link>
					</div>
					<Button
						className="w-full mt-3"
						type="submit"
					>
						{t("login.action")}
					</Button>
					<div className="mt-4">
						{t("login.subMessage")}&nbsp;
						<Link href={ROUTERS.AUTH.SIGNUP}>
							{t("login.subAction")}
						</Link>
					</div>
				</form>
			</Card>
			<FooterWithTerms />
		</div>
	);
};
