'use client';

import React, { useState, useMemo } from 'react';
import { propertiesData, Property } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { PropertyFilters } from '@/components/properties/PropertyFilters';
import { SlideUp } from '@/components/ui/motion-wrapper';
import { Building2 } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Multi-Unit',
  'Duplex',
  'Mansion',
  'Flat',
  'Terrace',
  'Commercial',
];

export function PropertiesClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(500000000);

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      const matchesCategory =
        activeCategory === 'All' || property.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        property.title.toLowerCase().includes(q) ||
        property.location.toLowerCase().includes(q) ||
        property.description.toLowerCase().includes(q);

      const matchesPrice = property.price <= maxPrice;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [activeCategory, searchQuery, maxPrice]);

  return (
    <div className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SlideUp>
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block">
            Verified Property Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight">
            Properties For Sale in Abeokuta
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Browse our handpicked catalogue of verified homes, multi-unit investment properties, duplexes, and commercial developments.
          </p>
        </div>
      </SlideUp>

      {/* Filter and Search Bar */}
      <PropertyFilters
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        totalCount={filteredProperties.length}
      />

      {/* Grid of Properties */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200/80 shadow-sm max-w-md mx-auto my-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto text-zinc-400">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-zinc-800">
            No properties matched your search
          </h3>
          <p className="text-xs text-zinc-500">
            Try adjusting your search criteria or filter options to view available listings.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-emerald-800 underline underline-offset-4"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
