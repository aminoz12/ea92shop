"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carData from "@/data/carData.json";

const categories = [
  { id: 1, name: "ARMATURE", icon: "/images/armature1.png", slug: "armature" },
  { id: 2, name: "ÉCLAIRAGE", icon: "/images/eclairage1.png", slug: "eclairage" },
  { id: 3, name: "RÉTROVISEUR", icon: "/images/retro1.png", slug: "retroviseur" },
  { id: 4, name: "PARE-CHOC", icon: "/images/parchoc1.png", slug: "pare-choc" },
  { id: 5, name: "GRILLE / CALANDRE", icon: "/images/grille1.png", slug: "grille-calandre" },
  { id: 6, name: "CAPOT", icon: "/images/capo1.png", slug: "capot" },
  { id: 7, name: "AILE", icon: "/images/aile1.png", slug: "aile" },
  { id: 8, name: "VITRAGE", icon: "/images/vitrage1.png", slug: "vitrage" },
  { id: 9, name: "CACHE SOUS MOTEUR", icon: "/images/cache1.png", slug: "cache-sous-moteur" },
  { id: 10, name: "HAYON / PORTE", icon: "/images/porte1.png", slug: "hayon-porte" },
  { id: 11, name: "MÉCANIQUE", icon: "/images/mecanique1.png", slug: "mecanique" },
  { id: 12, name: "ACCESSOIRE", icon: "/images/accessoire1.png", slug: "accessoire" }
];

export default function HeroSection() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [categoryOffset, setCategoryOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const brands = Object.keys(carData);
  const models = selectedBrand ? carData[selectedBrand as keyof typeof carData] : [];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 35 }, (_, i) => currentYear - i);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel("");
  };

  const handleNextCategories = () => {
    setCategoryOffset((prev) => (prev + 1) % categories.length);
  };

  const handlePrevCategories = () => {
    setCategoryOffset((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // Auto-scroll categories every 1 second (one by one)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCategoryOffset((prev) => (prev + 1) % categories.length);
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get 6 visible categories with wrapping
  const getVisibleCategories = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (categoryOffset + i) % categories.length;
      visible.push(categories[index]);
    }
    return visible;
  };

  const visibleCategories = getVisibleCategories();

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:h-[650px] overflow-hidden bg-gradient-to-r from-[#1a2332] via-[#1e3a5f] to-[#2d4a6f]">
      {/* Background Image - PNG with transparent background */}
      <div className="absolute inset-0 opacity-40 sm:opacity-60 lg:opacity-100">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-contain object-right-top"
          quality={100}
          priority
        />
      </div>

      {/* Category Navigation Overlay - Hidden on mobile */}
      <div 
        className="hidden lg:block absolute top-0 left-0 right-0 z-10 border-b border-white/10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="flex items-center">
            <button 
              onClick={handlePrevCategories}
              className="text-white/80 hover:text-white p-3 hover:bg-white/5 transition-all rounded"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            
            <div className="flex items-center justify-between flex-1">
              {visibleCategories.map((category, index) => (
              <Link
                  key={`${category.id}-${categoryOffset}-${index}`}
                  href={`/shop?category=${category.slug}`}
                  className={`flex items-center justify-center gap-3 px-4 py-4 text-white hover:bg-white/5 transition-all flex-1 ${
                    index !== visibleCategories.length - 1 ? 'border-r border-white/10' : ''
                  }`}
                >
                  <div className="w-8 h-8 flex-shrink-0 relative">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={32}
                      height={32}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {category.name}
                  </span>
              </Link>
              ))}
            </div>

            <button 
              onClick={handleNextCategories}
              className="text-white/80 hover:text-white p-3 hover:bg-white/5 transition-all rounded"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
              </div>
        </div>
        </div>

      {/* Content */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center py-12 sm:py-16 lg:py-0">
        <div className="max-w-5xl w-full text-center">
          {/* Main Heading */}
          <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-white mb-3 sm:mb-4 leading-[1.2] uppercase tracking-tight">
            VOTRE VOITURE, VOS PIÈCES<br />
            <span className="inline-block sm:-ml-8 lg:-ml-16">DE CARROSSERIE.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-[14px] sm:text-[16px] mb-6 sm:mb-8 lg:mb-10 font-normal">
            Sélectionnez un véhicule et trouvez vos pièces de rechange.
          </p>

          {/* Search Form */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch justify-center max-w-4xl mx-auto">
            {/* Dropdown 1 - Brand */}
            <div className="flex-1 relative min-w-0">
              <select
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full h-[45px] sm:h-[50px] px-3 sm:px-5 bg-white text-[#ff5757] rounded-md focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer font-bold text-[11px] sm:text-[13px] tracking-wide"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ff5757' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '14px'
                }}
              >
                <option value="">1. Marque</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown 2 - Model */}
            <div className="flex-1 relative min-w-0">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full h-[45px] sm:h-[50px] px-3 sm:px-5 bg-white text-[#7a8a9e] rounded-md focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer font-bold text-[11px] sm:text-[13px] tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={!selectedBrand}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237a8a9e' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '14px'
                }}
              >
                <option value="">2. Modèle</option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown 3 - Year */}
            <div className="flex-1 relative min-w-0">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full h-[45px] sm:h-[50px] px-3 sm:px-5 bg-white text-[#7a8a9e] rounded-md focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer font-bold text-[11px] sm:text-[13px] tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={!selectedModel}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237a8a9e' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '14px'
                }}
              >
                <option value="">3. Année</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <Link
              href="/shop"
              className="bg-[#ff5757] hover:bg-[#ff4040] text-white font-black h-[45px] sm:h-[50px] px-6 sm:px-10 rounded-md flex items-center justify-center gap-2 transition-colors uppercase text-[11px] sm:text-[13px] tracking-wider whitespace-nowrap shadow-lg"
            >
              <span className="hidden sm:inline">RECHERCHER →</span>
              <span className="sm:hidden">RECHERCHER</span>
            </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
