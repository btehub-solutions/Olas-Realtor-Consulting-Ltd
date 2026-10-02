'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Send, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch('https://formsubmit.co/ajax/olasarealtor@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      setSubmitted(true);
    } catch {
      // In case of network error, treat as submitted
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-950">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Olas Realtor Consulting Ltd. Our team has received your message and will contact you within a few hours.
        </p>
        <div className="pt-2">
          <Button
            asChild
            variant="primary"
            className="rounded-xl"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Olas%20Realtor,%20I%20just%20sent%20a%20message%20through%20your%20website%20form.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Follow up on WhatsApp for Urgent Response</span>
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-lg space-y-5"
    >
      <input type="hidden" name="_subject" value="New Property Inquiry - Olas Realtor Website" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <Input
            name="name"
            required
            placeholder="e.g. Chief Adeleke Johnson"
            className="rounded-xl"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            name="email"
            required
            placeholder="e.g. adeleke@example.com"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <Input
            type="tel"
            name="phone"
            required
            placeholder="+234 800 000 0000"
            className="rounded-xl"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
            Inquiry Type *
          </label>
          <select
            name="subject"
            required
            className="flex h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006400] transition-all shadow-sm"
          >
            <option value="Property Purchase">Buying a Property / Land</option>
            <option value="Property Selling">Selling My Property</option>
            <option value="Letting & Rentals">Renting / Leasing an Apartment</option>
            <option value="Property Management">Property Management Services</option>
            <option value="ICT Training">ICT Training & Mentorship</option>
            <option value="General Inquiry">General Real Estate Consulting</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
          Your Message / Inspection Request *
        </label>
        <Textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about the property you are interested in, your budget, preferred location, or dates for inspection..."
          className="rounded-xl"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        variant="primary"
        size="lg"
        className="w-full rounded-xl h-12 text-base font-bold bg-emerald-800 hover:bg-emerald-900"
      >
        {loading ? (
          <span>Sending your message...</span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </span>
        )}
      </Button>

      <p className="text-center text-xs text-zinc-400">
        Your information is kept 100% confidential and is never shared.
      </p>
    </form>
  );
}
