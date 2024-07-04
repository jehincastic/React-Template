import React, { useState, useEffect, createContext } from "react";


export const AuthContext = createContext({
	user: {
		authenticated: false,
		id: 0,
		email: "",
		name: "",
		timezone: "",
		image: "",
		emailVerified: false,
		onboardingCompleted: false,
		createdAt: new Date(),
		updatedAt: new Date(),
		loading: true,
	},
	setUser: () => {},
});

const useProvideAuth = () => {
	const [user, setUser] = useState({
		authenticated: false,
		id: 0,
		email: "",
		name: "",
		timezone: "",
		image: "",
		emailVerified: false,
		onboardingCompleted: false,
		createdAt: new Date(),
		updatedAt: new Date(),
		loading: true,
	});

	const fetchUserInfo = async () => {
		/**
     * Fetch user Info and display error or remove token
     */
		setUser({
			...user,
			// remove this after implementing api
			onboardingCompleted: true,
			authenticated: true,
			loading: false,
		});
	};

	useEffect(() => {
		fetchUserInfo()
			.catch(() => {
				setUser({
					...user,
					loading: false,
				});
			});
	}, []);

	return {
		user,
		setUser,
	};
};

export const AuthProvider = ({ children }) => {
	const auth = useProvideAuth();
	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	);
};
