"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const brands = [
  // Row 1
  { id: 1, name: "PEUGEOT", slug: "peugeot" },
  { id: 2, name: "RENAULT", slug: "renault" },
  { id: 3, name: "VOLKSWAGEN", slug: "volkswagen" },
  { id: 4, name: "CITROËN", slug: "citroen" },
  { id: 5, name: "OPEL", slug: "opel" },
  // Row 2
  { id: 6, name: "FORD", slug: "ford" },
  { id: 7, name: "FIAT", slug: "fiat" },
  { id: 8, name: "AUDI", slug: "audi" },
  { id: 9, name: "MERCEDES-BENZ", slug: "mercedes-benz" },
  { id: 10, name: "BMW", slug: "bmw" },
  // Row 3
  { id: 11, name: "NISSAN", slug: "nissan" },
  { id: 12, name: "TOYOTA", slug: "toyota" },
  { id: 13, name: "DACIA", slug: "dacia" },
  { id: 14, name: "SEAT", slug: "seat" },
  { id: 15, name: "HYUNDAI", slug: "hyundai" }
];

export default function BrandsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
      {/* Modern Background Design */}
      <div className="absolute inset-0 opacity-40">
        {/* Top Right Circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-3xl"></div>
        {/* Bottom Left Circle */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-red-50 to-orange-50 rounded-full blur-3xl"></div>
        {/* Dots Pattern */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-[#1a3a52] rounded-full opacity-20"></div>
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-[#1a3a52] rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a52] mb-2 sm:mb-4">
              Nos Marques
            </h2>
            <p className="text-[#1a3a52] text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              Pièces compatibles, fiables et certifiées pour les plus
              grandes marques automobiles.
            </p>
          </div>
          <Link
            href="/brands"
            className="bg-[#1a3a52] hover:bg-[#2a4a62] text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center gap-2 sm:gap-3 transition-colors text-xs sm:text-sm lg:text-[15px] uppercase tracking-wide whitespace-nowrap"
          >
            <span className="hidden sm:inline">Plus de marques</span>
            <span className="sm:hidden">Plus</span>
            <ArrowRight size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
          </Link>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/shop?brand=${brand.slug}`}
              className="bg-white border-2 border-gray-200 hover:border-[#1a3a52] rounded-lg py-4 sm:py-5 lg:py-6 px-3 sm:px-4 lg:px-6 flex items-center justify-center transition-all hover:shadow-md group"
            >
              <span className="text-[#1a3a52] font-bold text-xs sm:text-sm lg:text-[15px] tracking-wide uppercase text-center group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

