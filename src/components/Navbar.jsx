import { useTranslation } from "react-i18next";

import { Button, Link } from "./Base";
import { ROUTERS } from "../constants";
import { AppLogo, Icon } from "../icons";

const OnlyIconNavBar = () => {
	return (
		<div className="navbar bg-base-100 shadow-sm justify-center border-b-2 fixed z-10">
			<div className="navbar-center">
				<AppLogo className="cursor-pointer" />
			</div>
		</div>
	);
};

const WebNavbar = () => {
	const { t } = useTranslation(["common"]);

	return (
		<div className="navbar bg-base-100 shadow-sm border-b-2 fixed z-1 px-2 md:px-6">
			<div className="navbar-start">
				<div className="dropdown">
					<label htmlFor="side-bar" className="btn btn-ghost drawer-button">
						<Icon name="Hamburger" />
					</label>
				</div>
			</div>
			<div className="navbar-center">
				<Link href={ROUTERS.HOME} className="btn btn-ghost">
					<AppLogo />
				</Link>
			</div>
			<div className="navbar-end gap-2 md:gap-4">
				<Button className="btn btn-ghost btn-circle">
					<div className="indicator">
						<Icon name="NotificationEmpty" />
					</div>
				</Button>
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<a className="justify-between">
								{t("navbar.profile")}
							</a>
						</li>
						<li>
							<a>
								{t("navbar.settings")}
							</a>
						</li>
						<li>
							<a>
								{t("navbar.logout")}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export const Navbar = ({ onlyLogo }) => {
	if (onlyLogo) {
		return <OnlyIconNavBar />;
	}

	return <WebNavbar />;
};
