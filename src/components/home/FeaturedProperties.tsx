import React from 'react';
import Link from 'next/link';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import { SlideUp, StaggerContainer, StaggerItem } from '@/components/ui/motion-wrapper';
import { ArrowRight, Flame } from 'lucide-react';

export function FeaturedProperties() {
  const featured = propertiesData.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <Flame className="w-4 h-4 text-[#7E3517]" />
                <span>Prime Listings in Ogun State</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Featured Properties For Sale
              </h2>
              <p className="text-zinc-600 mt-2 max-w-xl text-sm sm:text-base">
                Handpicked, verified titles with instant inspection access in Abeokuta’s most sought-after prime neighborhoods.
              </p>
            </div>

            <Button asChild variant="outline" className="rounded-xl border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white self-start md:self-end">
              <Link href="/properties" className="flex items-center gap-2">
                <span>View All Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </SlideUp>

        {/* Properties Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((prop) => (
            <StaggerItem key={prop.id}>
              <PropertyCard property={prop} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
