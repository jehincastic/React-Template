import { Trans, useTranslation } from "react-i18next";

import { Link } from "../Base";
import { ROUTERS } from "../../constants";

export const FooterWithTerms = () => {
	const { t } = useTranslation(["auth"]);

	return (
		<>
			<div className="mx-5 sm:mx-0 sm:max-w-[400px]">
				<Trans t={t} i18nKey="footer">
					By logging in to AppName, you accept AppName&apos;s&nbsp;
					<Link href={ROUTERS.EXTERNAL.LANDING.TERMS}>Terms of Service</Link>.
				</Trans>
			</div>
			<div className="mt-4 mb-10">
				© AppName, Inc.
			</div>
		</>
	);
};
