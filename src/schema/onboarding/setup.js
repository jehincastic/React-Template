import { z } from "zod";

import { COMPANY_TYPES } from "../../constants";
import { AddressSchema } from "../address";

export const OnboardingSetupSchema = z
	.object({
		name: z
			.string()
			.trim()
			.min(1, { message: "fields.name.error.required" }),
		type: z
			.enum(COMPANY_TYPES.map(v => v.value), { message: "fields.type.error.invalid" }),
		address: AddressSchema.nullable(),
	});
