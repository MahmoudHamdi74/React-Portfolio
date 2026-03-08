import { createContext, useContext, useState, useCallback } from "react";

const RTL_LOCALES = new Set(["he", "fa", "ur"]);

const LocaleContext = createContext(null);

const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "es", "fr"];
const STORAGE_KEY = "preferred-locale";

function getSavedLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;
  } catch {}
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(getSavedLocale);

  const setLocale = useCallback((newLocale) => {
    if (SUPPORTED_LOCALES.includes(newLocale)) {
      setLocaleState(newLocale);
      try {
        localStorage.setItem(STORAGE_KEY, newLocale);
      } catch {}
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

export function getHTMLTextDir(locale) {
  return RTL_LOCALES.has(locale) ? "rtl" : "ltr";
}
