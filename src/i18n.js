import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: "./Lang/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    //disable in production
    debug: false,
    ns: ["info", "home", "profile"],

    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });  
export default i18next;
