import { useLang } from '@/i18n/LangContext';
import { useInView, useCountUp } from '@/hooks/useInView';

export default function Stats() {
  const { t } = useLang();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-l from-earth-800 via-earth-900 to-earth-800 overflow-hidden">
      <div className="absolute inset-0 pattern-overlay" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-b-full bg-sand-400/5" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.stats.map((stat, i) => (
            <StatItem key={i} stat={stat} start={inView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  start,
  delay,
}: {
  stat: { value: number; label: string; suffix: string; decimal?: boolean };
  start: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, 2000, start, stat.decimal);

  return (
    <div className="text-center animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative inline-block">
        <p className="font-display text-3xl sm:text-5xl lg:text-6xl text-sand-300 mb-2">
          {count}
          <span className="text-2xl sm:text-4xl text-sand-400/80">{stat.suffix}</span>
        </p>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-sand-400/40 rounded-full" />
      </div>
      <p className="text-sand-100/60 text-xs sm:text-base mt-3">{stat.label}</p>
    </div>
  );
}
