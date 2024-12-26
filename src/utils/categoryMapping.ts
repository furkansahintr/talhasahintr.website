type CategoryMap = Record<string, string>;

const trCategories: CategoryMap = {
  "hayat": "life",
  "yatırım": "invest",
  "inşaat": "build",
};

const enCategories: CategoryMap = {
  life: "life",
  invest: "invest",
  build: "build",
};



const categoryMappings: Record<string, CategoryMap> = {
  tr: trCategories,
  en: enCategories,
};

function createReverseMapping(categoryMap: CategoryMap): CategoryMap {
  const reverseMap: CategoryMap = {};
  Object.entries(categoryMap).forEach(([key, value]) => {
    reverseMap[value] = key;
  });
  return reverseMap;
}

const reverseCategoryMappings: Record<string, CategoryMap> = {
  tr: createReverseMapping(trCategories),
  en: createReverseMapping(enCategories),
};

export function getCategoryByLanguage(
  category: string,
  fromLang: string,
  toLang: string,
): string {
  const fromMapping = categoryMappings[fromLang];
  const toReverseMapping = reverseCategoryMappings[toLang];

  if (!fromMapping || !toReverseMapping) {
    console.warn(`Missing category mapping for: ${fromLang} or ${toLang}`);
    return category;
  }

  const commonCategory = fromMapping[category] || category;
  return toReverseMapping[commonCategory] || commonCategory;
}

export function getEnglishCategory(category: string, fromLang: string): string {
  return getCategoryByLanguage(category, fromLang, "en");
}

export function getTurkishCategory(category: string, fromLang: string): string {
  return getCategoryByLanguage(category, fromLang, "tr");
}
