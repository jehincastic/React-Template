import { z } from "zod";

import { BaseAuthSchema } from "./base";

export const LoginSchema = BaseAuthSchema.extend({
	rememberMe: z.boolean(),
});
