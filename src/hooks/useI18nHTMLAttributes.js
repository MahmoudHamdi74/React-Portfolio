import { useEffect } from "react";
import { useLocale, getHTMLTextDir } from "./LocaleContext";

/**
 * Updates <html> lang and dir attributes based on the current locale.
 * Essential for Arabic RTL support, accessibility, and SEO.
 */
export const useI18nHTMLAttributes = () => {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getHTMLTextDir(locale);
  }, [locale]);
};
