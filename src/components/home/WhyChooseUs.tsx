import React from 'react';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/motion-wrapper';
import {
  ShieldAlert,
  SearchCheck,
  Video,
  FileSpreadsheet,
  Handshake,
  Headphones,
} from 'lucide-react';

const pillars = [
  {
    icon: SearchCheck,
    title: 'Zero Omo-Onile Harassment',
    description:
      'Every plot and structure is vetted for clean title deed, government gazette, and verified ancestral ownership prior to listing.',
  },
  {
    icon: Video,
    title: 'Diaspora Virtual Inspections',
    description:
      'Living in the UK, US, or Canada? We arrange real-time live WhatsApp video walkthroughs and drone perimeter surveys for complete peace of mind.',
  },
  {
    icon: FileSpreadsheet,
    title: '100% Legal Transparency',
    description:
      'We coordinate Survey Plans, Deed of Assignment, and Governor’s Consent applications through accredited legal conveyancers.',
  },
  {
    icon: Handshake,
    title: 'Deep Local Market Authority',
    description:
      'Based in Oluwo, Abeokuta, our 15+ years of active grassroots experience provides unmatched price intelligence and high-growth land insights.',
  },
  {
    icon: ShieldAlert,
    title: 'Guaranteed Tenancy & Maintenance',
    description:
      'For rental investors, we handle tenant vetting, prompt rent remittal, and round-the-clock property maintenance without you lifting a finger.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description:
      'You are never left waiting. Our consultants provide direct one-on-one communication from inquiry to document handover.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
              The Olas Realtor Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Homeowners & Investors Rely on Us
            </h2>
            <p className="text-zinc-400 mt-3 text-base sm:text-lg">
              We eliminate the stress, opacity, and uncertainty typically associated with real estate transactions in Nigeria.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-zinc-800/60 backdrop-blur border border-zinc-700/60 rounded-3xl p-7 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center mb-5 text-emerald-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
