import { createBrowserRouter, RouterProvider as ReactRouter } from "react-router-dom";

import { Layout } from "../components";
import { ROUTERS } from "../constants";
import { Home, Login, NotFound, SetupAccount, Signup } from "../pages";

const router = createBrowserRouter([
	{
		path: ROUTERS.HOME,
		element: <Layout shouldBeAuthenticated />,
		children: [
			{
				path: ROUTERS.HOME,
				element: <Home />,
			},
		],
	}, {
		path: ROUTERS.AUTH.BASE,
		element: <Layout shouldBeAuthenticated={false} />,
		children: [
			{
				path: ROUTERS.AUTH.LOGIN,
				element: <Login />,
			},
			{
				path: ROUTERS.AUTH.SIGNUP,
				element: <Signup />,
			},
		],
	}, {
		path: ROUTERS.ONBOARDING.BASE,
		element: <Layout shouldBeAuthenticated onlyLogo />,
		children: [
			{
				path: ROUTERS.ONBOARDING.SETUP,
				element: <SetupAccount />,
			},
		],
	}, {
		path: ROUTERS.NOT_FOUND,
		element: <NotFound />,
	},
]);

export const RouterProvider = () => <ReactRouter router={router} />;
