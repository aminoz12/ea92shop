"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterBarProps {
  categories: { name: string; slug: string }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

export default function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);

  const handleApplyPrice = () => {
    onPriceChange(localMin, localMax);
    setShowFilters(false);
  };

  const handleReset = () => {
    setLocalMin(0);
    setLocalMax(1000);
    onPriceChange(0, 1000);
    onCategoryChange("all");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Filter className="mr-2" size={20} />
          Filtres
        </h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden text-primary"
        >
          {showFilters ? <X size={20} /> : <Filter size={20} />}
        </button>
      </div>

      <div className={`space-y-4 ${showFilters ? "block" : "hidden"} md:block`}>
        {/* Category Filter */}
        <div>
          <h3 className="font-medium mb-2 text-sm text-gray-700">Catégorie</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat.slug
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-medium mb-2 text-sm text-gray-700">Prix (€)</h3>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={localMin}
              onChange={(e) => setLocalMin(Number(e.target.value))}
              placeholder="Min"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span>-</span>
            <input
              type="number"
              value={localMax}
              onChange={(e) => setLocalMax(Number(e.target.value))}
              placeholder="Max"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleApplyPrice}
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Appliquer
            </button>
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="text-sm text-primary hover:text-primary-dark font-medium"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
}

