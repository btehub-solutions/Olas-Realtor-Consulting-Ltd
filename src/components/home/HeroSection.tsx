'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SlideUp, FadeIn } from '@/components/ui/motion-wrapper';
import {
  ShieldCheck,
  ArrowRight,
  Building2,
  Sparkles,
  Award,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-zinc-950 text-white py-16 sm:py-24 lg:py-28">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#7E3517]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <FadeIn delay={0.1}>
              <Badge className="bg-emerald-800/80 hover:bg-emerald-800 text-emerald-200 border-emerald-700/60 px-4 py-1.5 rounded-full text-xs font-semibold gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Premier Real Estate Consulting in Abeokuta, Ogun State</span>
              </Badge>
            </FadeIn>

            <SlideUp delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                Building Trust, Delivering Excellence in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-amber-200">
                  Nigerian Real Estate
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="text-zinc-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Whether you are an investor seeking verified land titles, a family
                looking for your dream home, or an aspiring professional aiming for
                industry-leading training — Olas Realtor is your most trusted
                partner.
              </p>
            </SlideUp>

            {/* CTAs */}
            <SlideUp delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl h-14 px-8 text-base shadow-lg shadow-emerald-950/50"
                >
                  <Link href="/properties" className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>Browse Properties</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#7E3517] hover:bg-[#5A0001] text-white rounded-2xl h-14 px-8 text-base shadow-lg shadow-black/40"
                >
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </SlideUp>

            {/* Trust Badges */}
            <SlideUp delay={0.5}>
              <div className="pt-6 border-t border-emerald-800/40 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>100% Verified Legal Titles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>15+ Years Excellence</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Building2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>500+ Properties Closed</span>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Right Column: Featured Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <SlideUp delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl aspect-[4/5] bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=80"
                    alt="Luxury Modern Architecture in Abeokuta"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Floating Highlight Card on Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-zinc-900 shadow-xl border border-white/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        Featured Opportunity
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                    <p className="font-extrabold text-base line-clamp-1">
                      Multi-Unit & Luxury Residential Estates
                    </p>
                    <p className="text-xs text-zinc-600 line-clamp-1">
                      Oluwo, Ibara, Osoba Hilltop & Dubai Destiny Estate
                    </p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-4 -left-4 bg-emerald-800 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-700/60 hidden sm:flex items-center gap-2 text-xs font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Direct WhatsApp Assistance Available</span>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}
