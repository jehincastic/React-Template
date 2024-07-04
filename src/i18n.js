import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import { IS_PROD, LANGUAGES } from "./constants";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: !IS_PROD,
		supportedLngs: LANGUAGES.map(l => l.code.toLowerCase()),
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		ns: ["common"],
  	defaultNS: "common",
	});

export default i18n;
