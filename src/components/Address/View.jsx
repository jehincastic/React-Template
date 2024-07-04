import { useTranslation } from "react-i18next";

import { Button } from "../Base";
import { Icon } from "../../icons";

export const ViewAddress = ({ address, editHandler, removeHandler }) => {
	const { t } = useTranslation(["address"]);

	return (
		<div className="text-left border-2 border-dashed rounded-md mt-3 pt-2 flex-col	">
			<h6 className="p-0 m-0 pl-4">
				{address.lineOne}
				{address.lineTwo && <><br />{address.lineTwo}</>}
				{address.lineThree && <><br />{address.lineThree}</>}
				<br />
				{address.city}, {address.state}
				<br />
				{address.country}, {address.postalCode}
			</h6>
			{
				editHandler && (
					<div className="flex">
						<Button
							className="grow mt-4 mb-0"
							btnType="ghost"
							onClick={() => editHandler()}
							type="button"
						>
							<Icon name="Edit" size="18" /> {t("action.update")}
						</Button>
						<Button
							className="grow mt-4 mb-0"
							btnType="ghost"
							onClick={() => removeHandler()}
							type="button"
						>
							<Icon name="Delete" size="18" /> {t("action.remove")}
						</Button>
					</div>
				)
			}
		</div>
	);
};
