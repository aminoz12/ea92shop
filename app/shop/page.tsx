"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { getProducts, getCategories } from "@/lib/api";
import { Product, Category } from "@/types";
import { Grid, List, ChevronLeft, ChevronRight, Filter, X } from "lucide-react";

const ITEMS_PER_PAGE = 20;

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  // View states
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("alphabetically-az");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    }
    loadData();
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "alphabetically-az":
        return a.name.localeCompare(b.name);
      case "alphabetically-za":
        return b.name.localeCompare(a.name);
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const [showAllBrands, setShowAllBrands] = useState(false);

  const allBrands = [
    "PEUGEOT", "RENAULT", "VOLKSWAGEN", "CITROËN", "OPEL",
    "FORD", "FIAT", "AUDI", "MERCEDES-BENZ", "BMW",
    "NISSAN", "TOYOTA", "DACIA", "SEAT", "HYUNDAI",
    "HONDA", "MAZDA", "KIA", "SKODA", "VOLVO",
    "LAND ROVER", "JEEP", "MINI", "ALFA ROMEO", "JAGUAR",
    "PORSCHE", "LEXUS", "SUZUKI", "MITSUBISHI", "SUBARU"
  ];

  const displayedBrands = showAllBrands ? allBrands : allBrands.slice(0, 20);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Accueil</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900 font-medium">Boutique</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6 lg:gap-8 relative">
          {/* Mobile Filter Overlay */}
          {showFilters && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* Sidebar Filters */}
          <aside className={`
            fixed lg:static top-0 bottom-0 left-0 z-50 lg:z-0
            w-80 lg:w-80 flex-shrink-0 bg-white lg:bg-transparent
            transform transition-transform duration-300 ease-in-out
            ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto
          `}>
            {/* Mobile Close Button */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-lg font-bold text-[#1a2b42]">FILTRES</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="bg-white lg:rounded-lg lg:shadow-lg p-4 sm:p-6 mb-6">
              
              {/* Catégories Filter */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-[#1a2b42] mb-6 uppercase tracking-wide">Catégories</h3>
                <div className="space-y-1">
                  <label className="flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-[#1a2b42]/5 hover:to-transparent p-3 rounded-lg transition-all duration-200 group">
                    <input
                      type="radio"
                      name="category"
                      className="w-5 h-5 min-w-[20px] min-h-[20px] mt-0.5 text-[#ff5757] focus:ring-[#ff5757] focus:ring-2 cursor-pointer"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                    />
                    <span className={`ml-4 font-semibold transition-colors leading-normal ${selectedCategory === "all" ? "text-[#ff5757]" : "text-gray-800 group-hover:text-[#1a2b42]"}`}>
                      Toutes les catégories
                    </span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.slug} className="flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-[#1a2b42]/5 hover:to-transparent p-3 rounded-lg transition-all duration-200 group">
                      <input
                        type="radio"
                        name="category"
                        className="w-5 h-5 min-w-[20px] min-h-[20px] mt-0.5 text-[#ff5757] focus:ring-[#ff5757] focus:ring-2 cursor-pointer"
                        checked={selectedCategory === cat.slug}
                        onChange={() => setSelectedCategory(cat.slug)}
                      />
                      <span className={`ml-4 text-[15px] transition-colors leading-normal ${selectedCategory === cat.slug ? "text-[#ff5757] font-semibold" : "text-gray-700 group-hover:text-[#1a2b42]"}`}>
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-[#1a2b42] mb-6 uppercase tracking-wide">Prix</h3>
                <div className="space-y-4">
                  <div className="relative pt-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-gray-500">€</span>
                    </div>
                    <span className="text-gray-400 font-medium">-</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500])}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-gray-500">€</span>
                    </div>
                  </div>
                </div>
      </div>

              {/* Brand Filter */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a2b42] mb-6 uppercase tracking-wide">Marque</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                  {displayedBrands.map((brand) => (
                    <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary rounded"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand));
                          }
                        }}
                      />
                      <span className="ml-3 text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
                {allBrands.length > 20 && (
          <button
                    onClick={() => setShowAllBrands(!showAllBrands)}
                    className="mt-4 w-full px-4 py-2 bg-[#1a2b42] hover:bg-[#2a3b52] text-white font-medium rounded-lg transition-colors"
                  >
                    {showAllBrands ? "Voir moins" : "Voir plus"}
                  </button>
                )}
              </div>

            </div>

            {/* Promotional Banner */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                FLAT 30% DISCOUNT
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Braking Blocks SUV
              </h3>
              <div className="relative h-40 mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"
                  alt="Promo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#1a2b42] text-white rounded-lg hover:bg-[#2a3b52] transition-colors text-sm font-medium"
                >
                  <Filter size={18} />
                  Filtres
                </button>
                <span className="text-gray-600 text-sm sm:text-base">{sortedProducts.length} Produits</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="alphabetically-az">A-Z</option>
                  <option value="alphabetically-za">Z-A</option>
                  <option value="price-low-high">Prix ↑</option>
                  <option value="price-high-low">Prix ↓</option>
                </select>

                {/* View Toggle - Hidden on mobile */}
                <div className="hidden sm:flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"}`}
                    aria-label="Grid view"
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"}`}
                    aria-label="List view"
                  >
                    <List size={20} />
          </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-8 sm:p-12 text-center">
                <p className="text-lg sm:text-xl text-gray-500">Aucun produit trouvé</p>
        </div>
      ) : (
              <>
                <div className={`grid gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8 ${
                  viewMode === "grid" 
                    ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
                    : "grid-cols-1"
                }`}>
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                    </button>
                    
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let page;
                      if (totalPages <= 5) {
                        page = i + 1;
                      } else if (currentPage <= 3) {
                        page = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        page = totalPages - 4 + i;
                      } else {
                        page = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded text-sm sm:text-base ${
                            currentPage === page
                              ? "bg-gray-900 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next page"
                    >
                      <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
