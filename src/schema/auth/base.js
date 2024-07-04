import { z } from "zod";

export const BaseAuthSchema = z
	.object({
		email: z
			.string()
			.trim()
			.min(1, { message: "fields.email.error.required" })
			.email({ message: "fields.email.error.invalid" }),
		password: z
			.string()
			.trim()
			.min(8, { message: "fields.password.error.length" }),
	});
