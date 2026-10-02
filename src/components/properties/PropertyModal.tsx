'use client';

import React from 'react';
import Image from 'next/image';
import { Property } from '@/data/properties';
import { Dialog, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/data/siteConfig';
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Car,
  FileCheck,
  MessageCircle,
  Phone,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PropertyModal({
  property,
  open,
  onOpenChange,
}: PropertyModalProps) {
  if (!property) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Olas Realtor, I am interested in inspecting the property: "${property.title}" located at ${property.location} priced at ${property.priceFormatted}. Please share more details.`
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="space-y-6">
        {/* Image preview */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-zinc-100">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="default" className="bg-[#006400] text-white">
              {property.status}
            </Badge>
            <Badge variant="outline" className="bg-white/90 backdrop-blur font-medium">
              {property.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-xl shadow-lg border border-zinc-200">
            <span className="text-xl sm:text-2xl font-black text-emerald-900">
              {property.priceFormatted}
            </span>
          </div>
        </div>

        {/* Title and location */}
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-zinc-900 leading-snug">
            {property.title}
          </DialogTitle>
          <div className="flex items-center gap-2 text-sm text-zinc-600 mt-1">
            <MapPin className="w-4 h-4 text-[#7E3517] shrink-0" />
            <span>{property.location}</span>
          </div>
        </DialogHeader>

        {/* Feature quick badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-zinc-100">
          {property.bedrooms && (
            <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 p-2.5 rounded-xl">
              <Bed className="w-4 h-4 text-emerald-800" />
              <span className="text-xs font-semibold">
                {property.bedrooms} Bedrooms
              </span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 p-2.5 rounded-xl">
              <Bath className="w-4 h-4 text-emerald-800" />
              <span className="text-xs font-semibold">
                {property.bathrooms} Baths
              </span>
            </div>
          )}
          {property.area && (
            <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 p-2.5 rounded-xl">
              <Maximize2 className="w-4 h-4 text-emerald-800" />
              <span className="text-xs font-semibold">{property.area}</span>
            </div>
          )}
          {property.parking && (
            <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 p-2.5 rounded-xl">
              <Car className="w-4 h-4 text-emerald-800" />
              <span className="text-xs font-semibold">
                {property.parking} Parking
              </span>
            </div>
          )}
        </div>

        {/* Title Documentation */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <FileCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Verified Legal Title
            </p>
            <p className="text-sm font-semibold text-amber-800">
              {property.titleDeed}
            </p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 className="font-bold text-zinc-900 mb-2 text-sm uppercase tracking-wider">
            Property Description
          </h4>
          <p className="text-zinc-600 text-sm leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Amenity / Feature list */}
        <div>
          <h4 className="font-bold text-zinc-900 mb-2.5 text-sm uppercase tracking-wider">
            Key Features & Amenities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {property.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs font-medium text-zinc-700 bg-zinc-50 p-2 rounded-lg"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            variant="primary"
            className="flex-1 rounded-xl h-12 bg-emerald-700 hover:bg-emerald-800"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="flex-1 rounded-xl h-12 bg-[#7E3517] hover:bg-[#5A0001]"
          >
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="flex items-center justify-center gap-2 font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Agent Now</span>
            </a>
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
