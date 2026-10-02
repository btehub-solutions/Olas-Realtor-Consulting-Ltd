'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';

interface PropertyFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  totalCount: number;
}

export function PropertyFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  maxPrice,
  onMaxPriceChange,
  totalCount,
}: PropertyFiltersProps) {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200/80 shadow-sm mb-8 space-y-5">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, location (e.g. Oluwo, Ibara)..."
            className="pl-10 h-11 rounded-2xl bg-zinc-50 border-zinc-200"
          />
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 self-start md:self-center font-medium">
          <SlidersHorizontal className="w-4 h-4 text-emerald-800" />
          <span>
            Showing <strong className="text-zinc-900">{totalCount}</strong>{' '}
            verified properties
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
