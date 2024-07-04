import { combineClasses } from "../../utils";

export const HorizontalDivider = ({ splitText, className }) => {
	return <div className={combineClasses("divider", className)}>{splitText}</div>;
};
