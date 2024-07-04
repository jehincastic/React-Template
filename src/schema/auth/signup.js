import { z } from "zod";

import { BaseAuthSchema } from "./base";

export const SignupSchema = BaseAuthSchema.extend({
	name: z
		.string()
		.trim()
		.min(1, { message: "fields.name.error.required" }),
	confirmPassword: z
		.string()
		.trim()
		.min(8, { message: "fields.confirmPassword.error.mismatch" }),
	terms:	z
		.boolean(),
})
	.refine((data) => data.password === data.confirmPassword, {
		message: "fields.confirmPassword.error.mismatch",
		path: ["confirmPassword"],
	})
	.refine((data) => data.terms === true, {
		message: "fields.terms.error.required",
		path: ["terms"],
	});
