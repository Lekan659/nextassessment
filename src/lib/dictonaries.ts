import { Dictionary } from "@/types/lang";
import "server-only";
import { Locale } from "../i18n.config";
const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("@/assets/lang/en.json").then((module) => module.default),
  //Add other languages here
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
