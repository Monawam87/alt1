import { useState } from 'react';
import {
  Globe,
  BookOpen,
  Building2,
  Landmark,
  PenTool,
  FlaskConical,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  BookOpen,
  Building2,
  Landmark,
  PenTool,
  FlaskConical,
};

export default function Galleries({ onBookClick }: { onBookClick: () => void }) {
  const { t, lang } = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="galleries" className="relative py-20 sm:py-32 bg-earth-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-[1px] border-sand-400" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border-[1px] border-sand-400 translate-x-40 translate-y-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full border-[1px] border-sand-400" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className={`text-center mb-12 sm:mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sand-400 text-xs sm:text-sm font-bold tracking-[0.25em] mb-3">
            {t.galleries.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-5xl text-white mb-4">{t.galleries.title}</h2>
          <p className="text-sand-100/60 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            {t.galleries.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {t.galleryData.map((gallery, i) => {
            const Icon = iconMap[gallery.icon] ?? Landmark;
            const isHovered = hovered === gallery.id;
            return (
              <article
                key={gallery.id}
                className={`group relative rounded-2xl overflow-hidden bg-earth-800 cursor-pointer transition-all duration-500 ${
                  inView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
                onMouseEnter={() => setHovered(gallery.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={onBookClick}
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={gallery.image}
                    alt={gallery.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl glass-dark flex items-center justify-center">
                    <Icon size={24} className="text-sand-300" />
                  </div>
                  <div className="absolute bottom-4 right-5 left-5">
                    <span className="text-sand-400 text-xs font-bold tracking-widest">{gallery.subtitle}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl text-white mb-3 group-hover:text-sand-300 transition-colors">
                    {gallery.title}
                  </h3>
                  <p className="text-sand-100/55 text-sm leading-relaxed mb-4 line-clamp-3">{gallery.description}</p>
                  <div className="flex items-center gap-2 text-sand-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t.galleries.visitRoom}
                    <Arrow size={16} />
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,106,0.4)' }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
