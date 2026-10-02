'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SlideUp } from '@/components/ui/motion-wrapper';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SlideUp>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur mb-5">
            <Mail className="w-7 h-7 text-emerald-200" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Stay Updated on New Property Deals in Abeokuta
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Subscribe to our weekly dispatch of verified price drops, prime land openings, and quarterly real estate market insights.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-2xl text-emerald-100 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              <span>Thank you! You are now subscribed to our property alerts.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-12 rounded-xl bg-white text-zinc-900 placeholder:text-zinc-400 border-none shadow-md"
              />
              <Button
                type="submit"
                variant="secondary"
                className="h-12 rounded-xl px-6 bg-[#7E3517] hover:bg-[#5A0001] text-white font-bold shrink-0 shadow-md"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 ml-1.5" />
              </Button>
            </form>
          )}

          <p className="text-xs text-emerald-200/60 mt-4">
            Zero spam. Unsubscribe anytime with a single click.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
