import { z } from "zod";

export const AddressSchema = z
	.object({
		lineOne: z
			.string()
			.trim()
			.min(1, { message: "fields.lineOne.error.required" }),
		lineTwo: z
			.string()
			.trim()
			.nullable(),
		lineThree: z
			.string()
			.trim()
			.nullable(),
		city: z
			.string()
			.trim()
			.min(1, { message: "fields.city.error.required" }),
		state: z
			.string()
			.trim()
			.min(1, { message: "fields.state.error.required" }),
		country: z
			.string()
			.trim()
			.min(1, { message: "fields.country.error.required" }),
		postalCode: z
			.number({ message: "fields.postalCode.error.invalid" })
			.min(1, { message: "fields.postalCode.error.invalid" }),
	});
