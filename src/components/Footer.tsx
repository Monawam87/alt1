import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const m = t.museumInfo;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-earth-900 border-t border-sand-400/10 overflow-hidden">
      <div className="h-1 bg-gradient-to-l from-transparent via-sand-400/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-display text-white text-lg leading-tight">{f.shortName}</p>
              <p className="text-sand-300/60 text-[11px] tracking-wide">{f.subtitle}</p>
            </div>
            <p className="text-sand-100/40 text-sm leading-relaxed">{m.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">{f.quickLinks}</h4>
            <ul className="space-y-3">
              {t.nav.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-sand-100/50 text-sm hover:text-sand-300 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-sand-400/40 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">{f.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sand-400 flex-shrink-0 mt-0.5" />
                <span className="text-sand-100/50 text-sm leading-relaxed">{m.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-sand-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${m.phone.replace(/\s/g, '')}`} className="text-sand-100/50 text-sm hover:text-sand-300 transition-colors" dir="ltr">{m.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-sand-400 flex-shrink-0 mt-0.5" />
                <span className="text-sand-100/50 text-sm leading-relaxed">{m.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-sand-400/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sand-100/30 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} {f.copyright}
          </p>
          <button onClick={scrollTop} className="flex items-center gap-2 text-sand-300/60 hover:text-sand-300 text-sm transition-colors group">
            {f.backToTop}
            <div className="w-8 h-8 rounded-full bg-earth-800 flex items-center justify-center group-hover:bg-sand-400 group-hover:text-earth-900 transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
