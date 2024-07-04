import { useTranslation } from "react-i18next";

import { Link } from "./Base";
import { ROUTERS } from "../constants";
import { Icon } from "../icons";

const navItem = [
	{
		key: "users",
		icon: "User",
		subItems: [{
			key: "list",
			icon: "",
			href: ROUTERS.ACCOUNT_SETTINGS.USERS.ADD,
		}],
	},
	{
		key: "integrations",
		icon: "Integration",
		href: ROUTERS.ACCOUNT_SETTINGS.INTEGRATIONS,
	},
];

const SingleNavItem = ({ translationKey, icon, href }) => {
	const { t } = useTranslation(["common"]);

	return (
		<li>
			<Link href={href} className="font-semibold no-underline justify-start">
				<Icon name={icon} /> {t(`navbar.side.${translationKey}`)}
			</Link>
		</li>
	);
};

const NavItemWithChildren = ({ translationKey, icon, subItems }) => {
	const { t } = useTranslation(["common"]);

	return (
		<li>
			<details>
				<summary className="font-semibold">
					<Icon name={icon} /> {t(`navbar.side.${translationKey}.base`)}
				</summary>
				<ul>
					{
						subItems.map(({
							key: nestedKey, icon: nestedIcon,
							href: nestedHref, subItems: nestedItems,
						}) => (
							<NavItem
								key={nestedKey}
								icon={nestedIcon}
								href={nestedHref}
								subItems={nestedItems}
								translationKey={`${translationKey}.${nestedKey}`}
							/>
						))
					}
				</ul>
			</details>
		</li>
	);
};

const NavItem = ({ translationKey, icon, href, subItems }) => {
	if (subItems) {
		return (
			<NavItemWithChildren
				icon={icon}
				href={href}
				translationKey={translationKey}
				subItems={subItems}
			/>
		);
	}
	return (
		<SingleNavItem
			icon={icon}
			href={href}
			translationKey={translationKey}
		/>
	);
};

export const SideBar = ({ sideBarRef }) => {
	return (
		<div className="drawer-side">
			<label htmlFor="side-bar" aria-label="close sidebar" className="drawer-overlay"></label>
			<aside className="bg-base-100 text-base-content min-h-full w-full sm:w-80 p-4">
				<div className="flex sm:hidden justify-end">
					<div className="btn btn-ghost btn-circle" onClick={() => sideBarRef?.current?.click()}>
						<Icon name="Close" />
					</div>
				</div>
				<ul className="menu">
					{
						navItem.map(({ key, icon, href, subItems }) => (
							<NavItem
								key={key}
								icon={icon}
								href={href}
								subItems={subItems}
								translationKey={key}
							/>
						))
					}
				</ul>
			</aside>
		</div>
	);
};
