import en from "@/assets/lang/en.json";
import { Locale } from "../i18n.config";

export interface PageWithLangParamsProps {
  params: { lang: Locale };
}
export interface ComponentWithLangProps {
  lang: Locale;
}
export type Dictionary = typeof en;
