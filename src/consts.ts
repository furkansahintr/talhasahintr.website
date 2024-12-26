export type SupportedLocale =
  | "en"
  | "tr";

export interface LanguageConstants {
  BrandName: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION: string;
  TAGS_TITLE: string;
  TAGS_DESCRIPTION: string;
  SEARCH_PAGE_TITLE: string;
  SEARCH_PAGE_DESCRIPTION: string;
  GO_TO_HOMEPAGE: string;
  ERROR_404_SUBMESSAGE: string;
  ERROR_404_MESSAGE: string;
  ERROR_404_DESCRIPTION: string;
  ERROR_404_TITLE: string;
  UPDATED_ON: string;
  PUBLISHED_ON: string;
  TAGS_HEADING: string;
  FOOTER_ABOUT: string;
  FOOTER_BUILD: string;
  FOOTER_INVEST: string;
  FOOTER_LIFE: string;
}

const trConstants: LanguageConstants = {
  BrandName: "Talha Blog",
  SITE_TITLE: "Talha Blog",
  SITE_DESCRIPTION: "Görsel hikaye anlatımı için bir Astro teması.",
  TAGS_TITLE: "Tüm Etiketler",
  TAGS_DESCRIPTION: "Görsel hikaye anlatımı için bir Astro teması.",
  SEARCH_PAGE_TITLE: "Site İçi Arama",
  SEARCH_PAGE_DESCRIPTION: "Talha Blog'daki tüm içerikleri arayın",
  GO_TO_HOMEPAGE: "Ana Sayfaya Dön",
  ERROR_404_SUBMESSAGE: "Aradığınız sayfa mevcut değil veya taşınmış.",
  ERROR_404_MESSAGE: "Sayfa Bulunamadı",
  ERROR_404_DESCRIPTION: "404 - Sayfa Bulunamadı",
  ERROR_404_TITLE: "404 - Sayfa Bulunamadı",
  UPDATED_ON: "Güncellenme Tarihi",
  PUBLISHED_ON: "Yayınlanma Tarihi",
  TAGS_HEADING: "Etiketler",
  FOOTER_ABOUT: "Hakkımızda",
  FOOTER_BUILD: "Beş Element",
  FOOTER_INVEST: "Yeryüzü Dalları",
  FOOTER_LIFE: "Gökyüzü Dalları",
};

const enConstants: LanguageConstants = {
  BrandName: "Astroverse",
  SITE_TITLE: "Astroverse",
  SITE_DESCRIPTION:
    "An Astro Theme for Visual Storytelling",
  TAGS_TITLE: "All Tags",
  TAGS_DESCRIPTION:
    "An Astro Theme for Visual Storytelling",
  SEARCH_PAGE_TITLE: "Site Search",
  SEARCH_PAGE_DESCRIPTION: "Search all content on Astroverse",
  GO_TO_HOMEPAGE: "Go to Homepage",
  ERROR_404_SUBMESSAGE:
    "The page you're looking for doesn't exist or has been moved.",
  ERROR_404_MESSAGE: "Page not found",
  ERROR_404_DESCRIPTION: "404 - Page not found",
  ERROR_404_TITLE: "404 - Page Not Found",
  UPDATED_ON: "Updated on",
  PUBLISHED_ON: "Published on",
  TAGS_HEADING: "Tags",
  FOOTER_ABOUT: "About Us",
  FOOTER_BUILD: "Build",
  FOOTER_INVEST: "Invest",
  FOOTER_LIFE: "Life",
};


export function getConstants(lang: SupportedLocale): LanguageConstants {
  switch (lang) {
    case "tr":
      return trConstants;
    default:
      return enConstants;
  }
}

export function getTagMetadata(tag: string, lang: SupportedLocale) {
  const constants = getConstants(lang);
  return {
    title: `${constants.SITE_TITLE} - ${tag}`,
    description: `${constants.TAGS_DESCRIPTION} ${tag}.`,
  };
}

export function getCategoryMetadata(category: string, lang: SupportedLocale) {
  const constants = getConstants(lang);
  return {
    title: `${constants.SITE_TITLE} - ${category}`,
    description: `${constants.SITE_DESCRIPTION} ${category}.`,
  };
}
