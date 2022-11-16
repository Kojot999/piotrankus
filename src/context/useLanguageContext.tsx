import { createContext, useContext } from "react";
import { translations } from "../locale/translations";
import { DictionaryLanguage, ILang } from "../types/locale";

export const LanguageContext = createContext<ILang>({
  language: DictionaryLanguage.EN,
});
export const useLanguageContext = () => {
  const languageContext = useContext(LanguageContext);
  return translations[languageContext.language];
};
