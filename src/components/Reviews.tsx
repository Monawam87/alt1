import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useInView } from '@/hooks/useInView';

export default function Reviews() {
  const { t, lang } = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const r = t.reviews;
  const reviewData = t.reviewData;

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActive((p) => (p + 1) % reviewData.length), 6000);
    return () => clearInterval(timer);
  }, [autoPlay, reviewData.length]);

  // Reset when language changes
  useEffect(() => setActive(0), [lang]);

  const next = () => { setAutoPlay(false); setActive((p) => (p + 1) % reviewData.length); };
  const prev = () => { setAutoPlay(false); setActive((p) => (p - 1 + reviewData.length) % reviewData.length); };

  const reviewLocale = lang === 'ar' ? 'ar-EG' : 'en-US';
  // In RTL the translateX direction is flipped by the browser; we need negative for RTL
  const offset = lang === 'ar' ? active * 100 : -active * 100;

  return (
    <section id="reviews" className="relative py-20 sm:py-32 bg-earth-50 overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-teal-200/15 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-sand-200/20 blur-3xl" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`text-center mb-12 sm:mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sand-600 text-xs sm:text-sm font-bold tracking-[0.25em] mb-3">{r.badge}</span>
          <h2 className="font-display text-2xl sm:text-5xl text-earth-900 mb-4">{r.title}</h2>
          <div className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 rounded-full bg-white shadow-lg">
            <span className="font-display text-2xl sm:text-3xl text-earth-900">{t.museumInfo.rating}</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className={s <= Math.round(t.museumInfo.rating) ? 'fill-sand-400 text-sand-400' : 'text-earth-200'} />
              ))}
            </div>
            <span className="text-earth-400 text-xs sm:text-sm">
              ({t.museumInfo.reviewCount.toLocaleString(reviewLocale)} {r.reviewsLabel})
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className={`relative ${inView ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(${offset}%)` }}>
              {reviewData.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-1 sm:px-2">
                  <div className="relative max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-earth-900/8 p-6 sm:p-12">
                    <Quote size={56} className="absolute top-6 left-8 text-sand-200/60" />
                    <div className="relative">
                      <div className="flex items-center gap-1 mb-5 sm:mb-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={18} className={s <= review.rating ? 'fill-sand-400 text-sand-400' : 'text-earth-200'} />
                        ))}
                      </div>
                      <p className="text-earth-700 text-base sm:text-lg leading-[1.9] sm:leading-[2] mb-6 sm:mb-8 text-balance">{review.text}</p>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-sand-300 to-sand-500 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-earth-900 text-sm sm:text-base">{review.name}</p>
                          <p className="text-earth-400 text-xs sm:text-sm truncate">{review.role}</p>
                        </div>
                        <div className="mr-auto text-earth-300 text-xs sm:text-sm whitespace-nowrap">{review.time}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7 sm:mt-8">
            <button onClick={prev} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-earth-600 hover:bg-sand-400 hover:text-earth-900 transition-all duration-300 hover:scale-110" aria-label={r.prev}>
              {lang === 'ar' ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
            </button>
            <div className="flex items-center gap-2">
              {reviewData.map((_, i) => (
                <button key={i} onClick={() => { setAutoPlay(false); setActive(i); }} className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-sand-500' : 'w-2.5 bg-earth-200 hover:bg-earth-300'}`} aria-label={`${r.reviewN} ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-earth-600 hover:bg-sand-400 hover:text-earth-900 transition-all duration-300 hover:scale-110" aria-label={r.next}>
              {lang === 'ar' ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
