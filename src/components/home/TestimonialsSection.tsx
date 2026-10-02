'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { SlideUp } from '@/components/ui/motion-wrapper';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonialsData.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonialsData.length - 1 ? 0 : c + 1));
  };

  const activeTestimonial = testimonialsData[current];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Words From Our Valued Clients
            </h2>
            <p className="text-zinc-600 mt-2 text-sm sm:text-base">
              Real stories from homeowners, diaspora investors, and commercial partners who trust our expertise.
            </p>
          </div>
        </SlideUp>

        {/* Carousel Container */}
        <div className="relative">
          <Card className="rounded-3xl p-8 sm:p-12 shadow-xl border-zinc-200/80 bg-white">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-emerald-100" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-lg sm:text-xl text-zinc-800 font-medium italic leading-relaxed">
                    "{activeTestimonial.content}"
                  </p>

                  {/* Author profile */}
                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                    {activeTestimonial.avatar && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-700/20 bg-zinc-100">
                        <Image
                          src={activeTestimonial.avatar}
                          alt={activeTestimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-zinc-900 text-base">
                        {activeTestimonial.name}
                      </h4>
                      <p className="text-xs text-zinc-500 font-medium">
                        {activeTestimonial.role} • {activeTestimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:bg-emerald-900 hover:text-white hover:border-emerald-900 shadow-sm transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === i ? 'w-8 bg-emerald-800' : 'w-2.5 bg-zinc-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:bg-emerald-900 hover:text-white hover:border-emerald-900 shadow-sm transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
