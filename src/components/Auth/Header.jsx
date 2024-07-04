import { AppLogo } from "../../icons";
import { combineClasses } from "../../utils";

export const HeaderWithLogo = ({
	title, subTitle,
	className, hideLogo = false,
}) => {
	return (
		<div className={combineClasses("sm:mx-auto sm:w-full sm:max-w-md pt-24", className)}>
			{
				!hideLogo && (
					<div className="flex justify-center mb-6">
						<AppLogo height="48" width="48" />
					</div>
				)
			}
			<p className="text-center text-3xl font-semibold tracking-tight mb-3">
				{title}
			</p>
			<span>{subTitle}</span>
		</div>
	);
};
