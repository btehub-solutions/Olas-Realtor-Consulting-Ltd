import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { SlideUp } from '@/components/ui/motion-wrapper';

export function StatsSection() {
  return (
    <section className="relative -mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <SlideUp delay={0.2}>
        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200/80 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx > 1 ? 'pt-4 lg:pt-0' : ''
              } ${idx === 1 ? 'pt-0' : ''}`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </SlideUp>
    </section>
  );
}
