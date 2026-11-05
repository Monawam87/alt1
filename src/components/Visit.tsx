import { useState } from 'react';
import { Clock, MapPin, Phone, Navigation, Calendar, ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import { useInView } from '@/hooks/useInView';

const tipIcons = { Calendar, Clock, Navigation };

export default function Visit() {
  const { t } = useLang();
  const v = t.visit;
  const { ref, inView } = useInView<HTMLDivElement>();
  const today = new Date().getDay();
  // JS getDay: 0=Sun, 6=Sat. Our array starts with Saturday=0.
  const todayIndex = today === 6 ? 0 : today === 5 ? 6 : today;
  const [openHours, setOpenHours] = useState(false);

  return (
    <section id="visit" className="relative py-20 sm:py-32 bg-earth-100 overflow-hidden">
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className={`text-center mb-12 sm:mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-sand-600 text-xs sm:text-sm font-bold tracking-[0.25em] mb-3">{v.badge}</span>
          <h2 className="font-display text-2xl sm:text-5xl text-earth-900 mb-4">{v.title}</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-sand-400" />
            <div className="w-2 h-2 rounded-full bg-sand-400" />
            <div className="h-px w-12 bg-sand-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Info cards */}
          <div className={`space-y-5 sm:space-y-6 ${inView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-lg shadow-earth-900/5 overflow-hidden">
              <button onClick={() => setOpenHours(!openHours)} className="w-full flex items-center gap-4 p-5 sm:p-6 text-right hover:bg-earth-50/50 transition-colors">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-earth-900 text-base sm:text-lg">{v.hoursTitle}</h3>
                  <p className="text-earth-400 text-sm">{v.hours[todayIndex].day}: {v.hours[todayIndex].time}</p>
                </div>
                <ChevronDown size={22} className={`text-earth-300 transition-transform duration-300 ${openHours ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-500 ease-out ${openHours ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 space-y-1">
                    {v.hours.map((h, i) => (
                      <div key={i} className={`flex items-center justify-between py-2.5 px-4 rounded-lg text-sm transition-colors ${i === todayIndex ? 'bg-teal-50 text-teal-700 font-bold' : 'text-earth-500 hover:bg-earth-50'}`}>
                        <span>{h.day}</span>
                        <span className="font-mono">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-lg shadow-earth-900/5 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-clay-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-clay-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-earth-900 text-base sm:text-lg mb-1">{v.addressTitle}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed">{t.museumInfo.address}</p>
                  <p className="text-earth-400 text-xs mt-2 font-mono">{t.museumInfo.plusCode}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg shadow-earth-900/5 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sand-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-sand-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-earth-900 text-base sm:text-lg mb-1">{v.contactTitle}</h3>
                  <a href={`tel:${t.museumInfo.phone.replace(/\s/g, '')}`} className="text-earth-500 text-sm hover:text-sand-600 transition-colors" dir="ltr">
                    {t.museumInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map + Image */}
          <div className={`space-y-5 sm:space-y-6 ${inView ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group h-48 sm:h-56">
              <img
                src="/images/IMG_7964.jpeg"
                alt={v.altMosque}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent" />
              <div className="absolute bottom-5 right-6 left-6">
                <h3 className="font-display text-white text-lg sm:text-xl mb-1">{v.mosqueTitle}</h3>
                <p className="text-sand-200/80 text-xs sm:text-sm">{v.mosqueSubtitle}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-earth-900/5 overflow-hidden">
              <div className="relative h-56 sm:h-64 bg-earth-100">
                <iframe
                  title={v.mapTitle}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=39.1690%2C21.5440%2C39.1790%2C21.5540&amp;layer=mapnik&amp;marker=21.5490%2C39.1740"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-earth-900/10 to-transparent" />
              </div>
              <div className="p-5">
                <button
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Taybat+Museum+Jeddah', '_blank')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sand-400 to-sand-500 text-earth-900 font-bold hover:shadow-lg hover:shadow-sand-500/30 transition-all duration-300"
                >
                  <Navigation size={18} />
                  {v.directions}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className={`mt-8 sm:mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4 ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          {v.tips.map((tip, i) => {
            const Icon = tipIcons[tip.icon];
            return (
              <div key={i} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-teal-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-earth-800 text-sm">{tip.title}</p>
                  <p className="text-earth-400 text-xs">{tip.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
