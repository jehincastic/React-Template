export const IS_PROD = import.meta.env.VITE_ENV === "PROD";
export const APP_URL = import.meta.env.VITE_APP_URL;
export const APP_NAME = import.meta.env.VITE_APP_NAME;

export const LANGUAGES = [{
	key: "english",
	code: "EN",
}, {
	key: "tamil",
	code: "TN",
}];

export const COMPANY_TYPES = [{
	label: "Construction",
	value: "construction",
}, {
	label: "Retailers",
	value: "retailers",
}, {
	label: "Manufacturers",
	value: "manufacturers",
}, {
	label: "Distributors",
	value: "distributors",
}, {
	label: "Agriculture",
	value: "agriculture",
}, {
	label: "Food and Beverage",
	value: "foodAndBeverage",
}, {
	label: "E-Commerce",
	value: "e-commerce",
}];