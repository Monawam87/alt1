import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  const { ref, inView } = useInView<HTMLDivElement>();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="about" className="relative py-20 sm:py-32 bg-earth-50 overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-sand-200/20 blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-teal-200/15 blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className={`text-center mb-12 sm:mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sand-600 text-xs sm:text-sm font-bold tracking-[0.25em] mb-3">
            {a.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-5xl text-earth-900 mb-4">{a.title}</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-sand-400" />
            <div className="w-2 h-2 rounded-full bg-sand-400" />
            <div className="h-px w-12 bg-sand-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image collage */}
          <div className={`relative ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-earth-900/20 group">
              <img
                src="/images/IMG_7962.jpeg"
                alt={a.altHall}
                className="w-full h-[300px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-earth-50 hidden sm:block animate-float">
              <img
                src="/images/IMG_7963.jpeg"
                alt={a.altDetails}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-5 glass-dark rounded-2xl px-5 py-3 text-center shadow-xl">
              <p className="font-display text-3xl text-sand-300">{a.badgeRooms}</p>
              <p className="text-sand-100/70 text-xs">{a.badgeRoomsLabel}</p>
            </div>
          </div>

          {/* Text */}
          <div className={inView ? 'animate-fade-in-up delay-200' : 'opacity-0'}>
            <h3 className="font-display text-xl sm:text-3xl text-earth-800 mb-5 sm:mb-6 leading-relaxed">
              {a.heading}
            </h3>
            <p className="text-earth-600 text-base sm:text-lg leading-[1.9] mb-5">{t.museumInfo.description}</p>
            <p className="text-earth-500 leading-[1.9] mb-7 text-sm sm:text-base">{a.desc2}</p>

            <ul className="space-y-3 mb-7">
              {a.highlights.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 text-earth-700 ${inView ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <CheckCircle2 size={22} className="text-teal-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById('galleries')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-earth-800 font-bold text-base hover:gap-4 transition-all duration-300"
            >
              {a.exploreGalleries}
              <Arrow size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
