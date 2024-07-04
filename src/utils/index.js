import { clsx } from "clsx";

export const combineClasses = (...args) => {
	return clsx.apply(null, args);
};

export * from "./form";
