import { Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "../../hooks/LocaleContext";
import { useTranslation } from "../../hooks/useTranslation";
import navbarDict from "../../content/navbar/navbar.content";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LANGUAGES = [
  { locale: "en", flag: "us", title: "English", desc: "United States" },
  { locale: "es", flag: "es", title: "Español", desc: "España" },
  { locale: "fr", flag: "fr", title: "Français", desc: "France" },
];

export default function LanguageList() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { locale, setLocale } = useLocale();
  const content = useTranslation(navbarDict);

  // قفل القائمة لما تدوس برا
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={content.chooseLanguage}
        className="
          relative w-10 h-10 rounded-full
          backdrop-blur-md border shadow-lg
          transition-all duration-300 overflow-hidden group
          bg-neutral-900/90 border-neutral-700/50 text-white
        "
      >
        {/* Hover glow */}
        <div className="
          absolute inset-0 rounded-full opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          bg-linear-to-r from-amber-500/20 to-amber-600/20 dark:from-purple-500/20 dark:to-purple-600/20
        " />

        <span className="relative z-10 text-lg align-middle justify-center flex cursor-pointer"><Languages /></span>

      </button>

      <div
        className={`
          absolute top-14 right-0 min-w-48 rounded-xl
          backdrop-blur-xl border shadow-2xl overflow-hidden z-50
          bg-neutral-900/95 border-neutral-700/50
          transition-all duration-200 origin-top-right
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >

        <div className="px-4 py-3 border-b border-neutral-700/50 text-white">
          <h3 className="font-semibold text-sm">{content.chooseLanguage}</h3>
        </div>

        
        <div className="p-2 space-y-1">
          {LANGUAGES.map((lang) => (
            <LanguageItem
              key={lang.locale}
              flag={lang.flag}
              title={lang.title}
              desc={lang.desc}
              active={locale === lang.locale}
              onClick={() => handleLocaleChange(lang.locale)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguageItem({ flag, title, desc, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
        transition-all duration-200 cursor-pointer
        ${active
          ? "bg-neutral-800 text-white"
          : "hover:bg-neutral-800/50 text-neutral-300"}
      `}
    >
      <span className={`fi fi-${flag} text-2xl rounded shadow-sm`}></span>

      <div className="flex-1">
        <div className="font-medium text-sm">{title}</div>
        {desc && <div className="text-xs opacity-75 text-neutral-400">{desc}</div>}
      </div>

      {active && (
        <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-purple-500" />
      )}
    </button>
  );
}
