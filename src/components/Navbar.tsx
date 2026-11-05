import { useEffect, useState } from 'react';
import { Menu, X, Calendar, Languages, Moon, Sun } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useScrollSpy } from '@/hooks/useInView';

export default function Navbar({
  onBookClick,
  theme,
  onThemeToggle,
}: {
  onBookClick: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}) {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeId = useScrollSpy(t.nav.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBook = () => {
    setMobileOpen(false);
    onBookClick();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-earth-900/95 backdrop-blur-lg shadow-lg shadow-black/30 py-2.5 sm:py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="text-right hidden sm:block">
              <p className="font-display text-base lg:text-lg text-white leading-tight">{t.footer.shortName}</p>
              <p className="text-[10px] lg:text-[11px] text-sand-300 tracking-wide">{t.footer.subtitle}</p>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {t.nav.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeId === link.id ? 'text-sand-300' : 'text-sand-100/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sand-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full glass text-sand-100 text-xs sm:text-sm font-bold hover:bg-white/15 transition-all duration-300"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={onThemeToggle}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-sand-100 hover:bg-white/15 transition-all duration-300"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            {/* Pre-booking button */}
            <button
              onClick={handleBook}
              className="hidden sm:flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-earth-900 text-sm font-bold hover:shadow-lg hover:shadow-sand-500/30 hover:scale-105 transition-all duration-300"
            >
              <Calendar size={16} />
              {t.booking.title}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white hover:text-sand-300 transition-colors"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} h-full w-72 max-w-[80vw] bg-earth-900 shadow-2xl transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : lang === 'ar' ? 'translate-x-full' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-sand-400/15">
            <div className="flex items-center gap-3">
              <p className="font-display text-white">{t.footer.shortName}</p>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-sand-200 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          <ul className="p-6 space-y-2">
            {t.nav.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                  className={`w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeId === link.id ? 'bg-sand-400/15 text-sand-300' : 'text-sand-100/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="p-6 space-y-3">
            <button
              onClick={onThemeToggle}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-sand-400/30 text-sand-200 font-bold"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
              {theme === 'light'
                ? lang === 'ar' ? 'الوضع الداكن' : 'Dark mode'
                : lang === 'ar' ? 'الوضع الفاتح' : 'Light mode'}
            </button>
            <button
              onClick={handleBook}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-earth-900 font-bold"
            >
              <Calendar size={18} />
              {t.booking.title}
            </button>
            <a
              href={`tel:${t.museumInfo.phone.replace(/\s/g, '')}`}
              className="block text-center text-sand-300 text-sm hover:text-sand-200 transition-colors"
              dir="ltr"
            >
              {t.museumInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
