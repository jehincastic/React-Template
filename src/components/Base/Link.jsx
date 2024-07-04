import { Link as ReactRouterLink } from "react-router-dom";
import { combineClasses } from "../../utils";

export const Link = ({ href, children, className, onClick }) => {
	return (
		<ReactRouterLink
			className={combineClasses("link", className)}
			to={href}
			onClick={onClick}
		>
			{children}
		</ReactRouterLink>
	);
};
