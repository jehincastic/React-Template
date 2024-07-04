import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks";
import { ROUTERS } from "../constants";
import { Navbar } from "./Navbar";
import { Loader } from "./Loader";
import { SideBar } from "./SideBar";

const AuthenticatedLayout = ({ onlyLogo }) => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const sideBarRef = useRef(null);

	useEffect(() => {
		if (!user.loading && !user.authenticated) {
			navigate(ROUTERS.AUTH.LOGIN);
		} else if (!user.loading && !user.onboardingCompleted) {
			navigate(ROUTERS.ONBOARDING.SETUP);
		} else if (!user.loading && !user.emailVerified) {
			navigate(ROUTERS.HOME);
		}
	}, [user]);

	return (
		<>
			<input ref={sideBarRef} id="side-bar" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<Navbar onlyLogo={onlyLogo} />
				<div className="pt-16">
					<Outlet />
				</div>
			</div>
			<SideBar sideBarRef={sideBarRef} />
		</>
	);
};

const BaseLayout = () => {
	const navigate = useNavigate();
	const { user } = useAuth();

	useEffect(() => {
		if (!user.loading && user.authenticated) {
			navigate(ROUTERS.HOME);
		}
	}, [user]);

	return <Outlet />;
};

export const Layout = ({ shouldBeAuthenticated, onlyLogo }) => {
	const { t } = useTranslation(["common"]);
	const { user } = useAuth();

	if (user.loading) {
		return <Loader helper={t("messages.fetchUserInfo")} />;
	}

	if (shouldBeAuthenticated) {
		return <AuthenticatedLayout onlyLogo={onlyLogo} />;
	}

	return <BaseLayout />;
};
