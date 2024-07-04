import { APP_URL } from "./common";

export const ROUTERS = {
	EXTERNAL: {
		LANDING: {
			TERMS: `${APP_URL}/terms`,
		},
	},
	HOME: "/",
	PROFILE_SETTINGS: {
		BASE: "/profile-settings",
		GENERAL: "/profile-settings/general",
		SECURITY: "/profile-settings/security",
		NOTIFICATIONS: "/profile-settings/notifications",
	},
	ACCOUNT_SETTINGS: {
		BASE: "/account-settings",
		GENERAL: "/account-settings/general",
		USERS: {
			BASE: "/account-settings/users",
			LIST: "/account-settings/users/list",
			INVITATIONS: "/account-settings/users/invitations",
			ADD: "/account-settings/users/add",
		},
		TEAMS: {
			BASE: "/account-settings/teams",
			LIST: "/account-settings/teams/list",
			ADD: "/account-settings/teams/add",
		},
		ROLES: {
			BASE: "/account-settings/roles",
			LIST: "/account-settings/roles/list",
			ADD: "/account-settings/roles/add",
		},
		CATEGORIES: {
			BASE: "/account-settings/categories",
			LIST: "/account-settings/categories/list",
			ADD: "/account-settings/categories/add",
		},
		INTEGRATIONS: "/account-settings/integrations",
		AUDIT_LOGS: "/account-settings/audit-logs",
	},
	AUTH: {
		BASE: "/auth",
		LOGIN: "/auth/login",
		SIGNUP: "/auth/signup",
		FORGOT_PASSWORD: "/forgot-password",
	},
	ONBOARDING: {
		BASE: "/onboarding",
		SETUP: "/onboarding/setup",
	},
	NOT_FOUND: "*",
};
