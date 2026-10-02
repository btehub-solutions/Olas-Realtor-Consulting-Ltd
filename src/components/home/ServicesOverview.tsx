import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/motion-wrapper';
import {
  Building2,
  KeyRound,
  FileCheck2,
  GraduationCap,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Property Sales & Land Acquisition',
    description:
      'We guide buyers and investors through certified property purchases, site surveys, and secure land acquisitions across Abeokuta and Ogun State.',
    link: '/properties',
    color: 'text-emerald-800',
    bg: 'bg-emerald-50',
  },
  {
    icon: KeyRound,
    title: 'Lettings & Tenancy Management',
    description:
      'Comprehensive property management, tenant screening, lease agreement drafting, and rent collection that safeguard your real estate income.',
    link: '/letting-rentals',
    color: 'text-[#7E3517]',
    bg: 'bg-red-50',
  },
  {
    icon: FileCheck2,
    title: 'Title Verification & Advisory',
    description:
      'Rigorous legal verification with the Ministry of Lands, title search, Governor’s Consent validation, and investment feasibility consulting.',
    link: '/services',
    color: 'text-emerald-800',
    bg: 'bg-emerald-50',
  },
  {
    icon: GraduationCap,
    title: 'ICT Training & Career Mentorship',
    description:
      'Equipping youth, students, and professionals with hands-on computer skills, web development, and digital marketing strategies for modern industries.',
    link: '/ict-training',
    color: 'text-[#7E3517]',
    bg: 'bg-red-50',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Comprehensive Real Estate Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-zinc-600 mt-3 text-base sm:text-lg">
              Delivering complete end-to-end support for property buyers, landlords, corporate developers, and aspiring tech professionals.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <StaggerItem key={idx}>
                <Card className="h-full flex flex-col justify-between hover:border-emerald-800/40">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl ${srv.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${srv.color}`} />
                    </div>
                    <CardTitle className="text-xl">{srv.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {srv.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link
                      href={srv.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition group"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
