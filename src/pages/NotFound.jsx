import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../constants";
import { Error } from "../components";

export const NotFound = () => {
	const navigate = useNavigate();
	const { t } = useTranslation(["common"]);

	const handleNavigation = () => navigate(ROUTERS.HOME);

	return (
		<Error
			title={t("error.notFound.title")}
			btnText={t("error.notFound.btnText")}
			subTitle={t("error.notFound.subTitle")}
			code="404"
			handleClick={handleNavigation}
		/>
	);
};
