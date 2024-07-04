import { Suspense } from "react";

import { AuthProvider } from "./auth";
import { RouterProvider } from "./router";
import { Loader, TailwindIndicator } from "../components";

const Providers = () => {
	return (
		<>
			<TailwindIndicator />
			<AuthProvider>
				<Suspense fallback={<Loader />}>
					<RouterProvider />
				</Suspense>
			</AuthProvider>
		</>
	);
};

export default Providers;

export * from "./auth";
export * from "./router";
