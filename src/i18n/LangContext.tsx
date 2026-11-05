import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Dict } from '@/i18n/translations';

type LangContextType = {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangContextType | null>(null);

const STORAGE_KEY = 'taybat-lang';

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'ar';
    return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const toggleLang = () => {
    const next = lang === 'ar' ? 'en' : 'ar';
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
