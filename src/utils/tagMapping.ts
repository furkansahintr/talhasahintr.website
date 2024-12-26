type TagMap = Record<string, string>;

const trTags: TagMap = {
  "Marka": "brand",
  "Geleneksel Pazarlama": "traditional-marketing"
};

const enTags: TagMap = {
  "Brand": "brand",
  "Traditional Marketing": "traditional-marketing"
};

const tagMappings: Record<string, TagMap> = {
  tr: trTags,
  en: enTags,
};

function createReverseMapping(tagMap: TagMap): TagMap {
  const reverseMap: TagMap = {};
  Object.entries(tagMap).forEach(([key, value]) => {
    reverseMap[value] = key;
  });
  return reverseMap;
}

const reverseTagMappings: Record<string, TagMap> = {
  tr: createReverseMapping(trTags),
  en: createReverseMapping(enTags),
};

export function getTagByLanguage(
  tag: string,
  fromLang: string,
  toLang: string,
): string {
  const fromMapping = tagMappings[fromLang];
  const toReverseMapping = reverseTagMappings[toLang];

  if (!fromMapping || !toReverseMapping) {
    console.warn(`Missing tag mapping for: ${fromLang} or ${toLang}`);
    return tag;
  }

  const commonTag = fromMapping[tag] || tag;
  return toReverseMapping[commonTag] || commonTag;
}

export function getEnglishTag(tag: string, fromLang: string): string {
  return getTagByLanguage(tag, fromLang, "en");
}

export function getTurkishTag(tag: string, fromLang: string): string {
  return getTagByLanguage(tag, fromLang, "tr");
}