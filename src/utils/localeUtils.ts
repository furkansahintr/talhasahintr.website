import type { SupportedLocale } from "@consts";

export const supportedLanguages = [
  "tr",
  "en",
];

export const languageNames: Record<string, string> = {
  en: "English",
  tr: "Türkçe",
};

export function getCurrentLocale(pathname: string): SupportedLocale {
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] as SupportedLocale;
  const supportedLocales: SupportedLocale[] = [
    "en",
    "tr",
  ];
  return supportedLocales.includes(locale) ? locale : "tr";
}

export function getBrandName(lang: SupportedLocale): string {
  const brandNames: Record<SupportedLocale, string> = {
    en: "Talha",
    tr: "Talha",
  };
  return brandNames[lang];
}

export function getSupportedLanguages(): string[] {
  return supportedLanguages;
}

export function getLanguageNames(): Record<string, string> {
  return languageNames;
}