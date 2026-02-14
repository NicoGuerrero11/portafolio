import { translations, type Lang, type TranslationKey } from "./translations";

const STORAGE_KEY = "lang";

/** Detect the user's preferred language from browser settings */
function detectLang(): Lang {
  if (typeof navigator === "undefined") return "es";
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  return browserLang === "en" ? "en" : "es";
}

/** Get the current language (localStorage > browser detection > default 'es') */
export function getLang(): Lang {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  }
  return detectLang();
}

/** Set and persist the language preference */
export function setLang(lang: Lang): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

/** Get a translated string by key for the given language */
export function t(key: TranslationKey, lang?: Lang): string {
  const currentLang = lang ?? getLang();
  return translations[currentLang][key] ?? key;
}

/** Apply all translations to elements with data-i18n attributes */
export function applyTranslations(lang?: Lang): void {
  const currentLang = lang ?? getLang();

  // Update all elements with data-i18n
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n") as TranslationKey;
    if (key && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = currentLang;

  // Update page title
  document.title = t("meta.title", currentLang);

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", t("meta.description", currentLang));
  }

  // Update toggle button text
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
  }
}

/** Toggle between ES and EN */
export function toggleLang(): void {
  const current = getLang();
  const next: Lang = current === "es" ? "en" : "es";
  setLang(next);
  applyTranslations(next);
}
