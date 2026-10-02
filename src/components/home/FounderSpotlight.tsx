import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SlideUp } from '@/components/ui/motion-wrapper';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';

export function FounderSpotlight() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-emerald-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-zinc-200/80 shadow-xl overflow-hidden relative">
            {/* Background decorative watermark */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 text-emerald-950/[0.03] select-none pointer-events-none">
              <Quote className="w-80 h-80" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              {/* Founder Image Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white outline outline-2 outline-emerald-800/20 bg-zinc-100">
                  <Image
                    src="/images/WhatsApp Image 2025-10-19 at 14.13.42_056d608f.jpg"
                    alt="Kolade Abiola Daramola - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-extrabold text-base sm:text-lg">
                      Kolade Abiola Daramola
                    </h4>
                    <p className="text-xs text-emerald-300 font-medium">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>

              {/* Message text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Leadership & Vision</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                  "Excellence, Integrity, and Long-Term Value in Nigerian Real Estate."
                </h3>

                <blockquote className="border-l-4 border-emerald-800 pl-4 py-1 italic text-zinc-700 text-sm sm:text-base leading-relaxed">
                  "I established Olas Realtor Consulting Ltd to provide clients with trusted solutions in property sales, land acquisition, leasing, and real estate advisory. Success goes beyond transactions — it is about creating lasting confidence and protecting your investments."
                </blockquote>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  With over 15 years of industry leadership in Abeokuta and Ogun State, Kolade Daramola has championed authentic property registration, transparent documentation, and community development.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild variant="primary" className="rounded-xl">
                    <Link href="/about" className="flex items-center gap-2">
                      <span>Read Full Company Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="outlineSecondary" className="rounded-xl">
                    <Link href="/contact">Schedule Executive Meeting</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
