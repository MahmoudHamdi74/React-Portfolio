import { useLocale } from "./LocaleContext";

/**
 * Recursively resolves a translation dictionary for the current locale.
 * Translation objects have the shape { en: "...", ar: "...", es: "...", fr: "..." }.
 * Non-translation objects (nested groups) are recursed into.
 * Primitives are returned as-is.
 */
function resolve(obj, locale) {
  if (obj === null || obj === undefined || typeof obj !== "object" || Array.isArray(obj)) {
    return obj;
  }
  // If the object has an "en" key with a string value, treat it as a translation
  if (typeof obj.en === "string") {
    return obj[locale] ?? obj.en;
  }
  // Otherwise recurse into nested objects
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = resolve(value, locale);
  }
  return result;
}

/**
 * Custom translation hook.
 * Accepts a dictionary object (imported from a .content.js file)
 * and returns a resolved object where every translation field
 * is replaced with the string for the active locale.
 */
export function useTranslation(dict) {
  const { locale } = useLocale();
  return resolve(dict, locale);
}
