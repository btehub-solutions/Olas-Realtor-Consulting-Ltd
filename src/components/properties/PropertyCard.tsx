'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/data/properties';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PropertyModal } from '@/components/properties/PropertyModal';
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Eye,
  FileCheck,
  Building,
} from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between">
        <div>
          {/* Property Image with Badges */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            <div className="absolute top-3 left-3 flex gap-1.5">
              <Badge
                variant={property.status === 'Featured' ? 'featured' : 'default'}
                className={
                  property.status === 'Featured'
                    ? 'bg-amber-500 text-white font-bold shadow-sm'
                    : 'bg-emerald-800 text-white font-medium shadow-sm'
                }
              >
                {property.status}
              </Badge>
              <Badge variant="outline" className="bg-white/95 font-medium shadow-sm text-zinc-800">
                {property.category}
              </Badge>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <span className="text-xl font-black drop-shadow-md">
                {property.priceFormatted}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-800 transition line-clamp-1 mb-1">
              {property.title}
            </h3>

            <p className="flex items-center gap-1.5 text-xs text-zinc-500 mb-3.5">
              <MapPin className="w-3.5 h-3.5 text-[#7E3517] shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </p>

            {/* Feature specs */}
            <div className="flex items-center flex-wrap gap-3 py-2.5 px-3 bg-zinc-50 rounded-xl text-xs text-zinc-600 mb-3 border border-zinc-100">
              {property.bedrooms ? (
                <div className="flex items-center gap-1 font-medium">
                  <Bed className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{property.bedrooms} Beds</span>
                </div>
              ) : null}
              {property.bathrooms ? (
                <div className="flex items-center gap-1 font-medium">
                  <Bath className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{property.bathrooms} Baths</span>
                </div>
              ) : null}
              {property.area && (
                <div className="flex items-center gap-1 font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{property.area}</span>
                </div>
              )}
              {property.category === 'Multi-Unit' && (
                <div className="flex items-center gap-1 font-medium text-emerald-800">
                  <Building className="w-3.5 h-3.5" />
                  <span>9 Income Units</span>
                </div>
              )}
            </div>

            {/* Title deed summary */}
            <p className="flex items-center gap-1.5 text-[11px] text-zinc-500 mb-4">
              <FileCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">Title: {property.titleDeed}</span>
            </p>
          </div>
        </div>

        {/* Card CTA */}
        <div className="p-5 pt-0">
          <Button
            onClick={() => setModalOpen(true)}
            variant="outline"
            className="w-full rounded-xl border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition font-semibold"
          >
            <Eye className="w-4 h-4 mr-1.5" />
            <span>View Full Details & Inquire</span>
          </Button>
        </div>
      </Card>

      <PropertyModal
        property={property}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
