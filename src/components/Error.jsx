import { Icon } from "../icons";
import { Button } from "./Base";

export const Error = ({
	title,
	btnText,
	iconName,
	subTitle,
	handleClick,
}) => {
	return (
		<section>
			<div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
				<div className="flex flex-col items-center max-w-sm mx-auto text-center">
					<h1 className="mt-3 text-2xl font-semibold md:text-3xl">
          	{title}
					</h1>
					<p className="mt-4">
          	{subTitle}
				</p>
					<div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
						<Button onClick={handleClick}>
            	<Icon size="20" name={iconName} /> {btnText}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
