import { Star, MapPin, Clock, ArrowDown, Sparkles, Calendar } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  const { t, lang } = useLang();
  const h = t.hero;
  const m = t.museumInfo;

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  const reviewLocale = lang === 'ar' ? 'ar-EG' : 'en-US';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/IMG_7961.jpeg"
          alt={h.altMuseum}
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/80 via-earth-900/65 to-earth-900/90" />
        <div className="absolute inset-0 pattern-overlay" />
      </div>

      {/* Decorative arch frame */}
      <div className="absolute inset-4 sm:inset-8 border border-sand-400/20 rounded-[2rem] pointer-events-none" />
      <div className="absolute inset-6 sm:inset-12 border border-sand-400/10 rounded-[2.5rem] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center pt-20 pb-16">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full glass-dark mb-6 sm:mb-8 animate-fade-in">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={15}
                className={s <= Math.round(m.rating) ? 'fill-sand-400 text-sand-400' : 'text-sand-400/30'}
              />
            ))}
          </div>
          <span className="text-sand-100 text-sm font-medium">
            {m.rating} ({m.reviewCount.toLocaleString(reviewLocale)} {h.reviews})
          </span>
        </div>

        {/* Title */}
        <div className="mb-4 flex items-center justify-center gap-3 animate-fade-in-up">
          <div className="h-px w-8 sm:w-10 bg-sand-400/40" />
          <span className="text-sand-300 text-xs sm:text-sm tracking-[0.3em]">{h.city}</span>
          <div className="h-px w-8 sm:w-10 bg-sand-400/40" />
        </div>

        <h1 className="font-display text-3xl sm:text-6xl lg:text-7xl text-white leading-[1.15] mb-5 animate-fade-in-up delay-100 text-balance">
          {m.name.split(' ').slice(0, 4).join(' ')}
          <span className="block text-sand-300 text-xl sm:text-3xl lg:text-4xl mt-3">
            {m.name.split(' ').slice(4).join(' ')}
          </span>
        </h1>

        <p className="text-sand-100/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up delay-200 text-balance">
          {m.tagline}
        </p>

        {/* Quick info */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-12 animate-fade-in-up delay-300">
          <div className="flex items-center gap-2 text-sand-200/80 text-xs sm:text-sm">
            <MapPin size={18} className="text-sand-400" />
            {h.locationShort}
          </div>
          <div className="w-1 h-1 rounded-full bg-sand-400/40" />
          <div className="flex items-center gap-2 text-sand-200/80 text-xs sm:text-sm">
            <Clock size={18} className="text-sand-400" />
            {h.openToday}
          </div>
          <div className="w-1 h-1 rounded-full bg-sand-400/40" />
          <div className="flex items-center gap-2 text-sand-200/80 text-xs sm:text-sm">
            <Sparkles size={18} className="text-sand-400" />
            {h.galleriesCount}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-400">
          <button
            onClick={onBookClick}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-sand-400 to-sand-500 text-earth-900 font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-sand-500/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            {t.booking.title}
          </button>
          <button
            onClick={() => document.getElementById('galleries')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-sand-400/40 text-white font-bold text-sm sm:text-base hover:bg-sand-400/10 hover:border-sand-400/70 transition-all duration-300 w-full sm:w-auto"
          >
            {h.exploreGalleries}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-300/60 hover:text-sand-300 transition-colors animate-fade-in delay-700"
        aria-label={h.discoverMore}
      >
        <span className="text-xs tracking-widest">{h.discoverMore}</span>
        <div className="w-7 h-12 rounded-full border-2 border-sand-400/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-sand-400 animate-float" />
        </div>
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
