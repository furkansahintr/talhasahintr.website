type TranslationMap = Record<string, string>;

const enTranslations: TranslationMap = {
  homepage: "Homepage",
  blog: "Blog",
};

const trTranslations: TranslationMap = {
  homepage: "Ana Sayfa",
  blog: "Makaleler",
};

const translationMappings: Record<string, TranslationMap> = {
  en: enTranslations,
  tr: trTranslations,
};

export function getTranslationByLanguage(key: string, locale: string): string {
  const translationMap =
    translationMappings[locale] || translationMappings["tr"];
  return translationMap[key] || key;
}
