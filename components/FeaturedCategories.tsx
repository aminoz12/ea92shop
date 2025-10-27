"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Roues & Pneus",
    products: [
      {
        id: 1,
        name: "Kit de Freins Avant & Arrière Power Stop K200",
        price: 250.00,
        originalPrice: null,
        discount: 0,
        rating: 0,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"
      },
      {
        id: 2,
        name: "Enjoliveur de Roue Unik Auto Wagon R",
        price: 370.00,
        originalPrice: 390.00,
        discount: 5,
        rating: 0,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80"
      },
      {
        id: 3,
        name: "Pommeau de Vitesse LED Wolkom Home",
        price: 235.00,
        originalPrice: null,
        discount: 0,
        rating: 4,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80"
      }
    ]
  },
  {
    id: 2,
    name: "Audio & Électronique",
    products: [
      {
        id: 4,
        name: "Pommeau de Vitesse LED Sports Wolkom Home",
        price: 235.00,
        originalPrice: null,
        discount: 0,
        rating: 4,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
      },
      {
        id: 5,
        name: "Direction Universelle Sport de Voiture",
        price: 340.00,
        originalPrice: 400.00,
        discount: 15,
        rating: 4,
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80"
      },
      {
        id: 6,
        name: "Volant en Aluminium Sparco Vintage",
        price: 250.00,
        originalPrice: null,
        discount: 0,
        rating: 5,
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80"
      }
    ]
  },
  {
    id: 3,
    name: "Pièces de Performance",
    products: [
      {
        id: 7,
        name: "Enjoliveur de Roue Unik Auto Wagon R",
        price: 370.00,
        originalPrice: 390.00,
        discount: 5,
        rating: 0,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80"
      },
      {
        id: 8,
        name: "Huile Moteur Diesel Genuine Mobil Delvac",
        price: 250.00,
        originalPrice: null,
        discount: 0,
        rating: 5,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"
      },
      {
        id: 9,
        name: "Kit de Freins Avant & Arrière Power Stop K200",
        price: 85.00,
        originalPrice: 97.00,
        discount: 12,
        rating: 4,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"
      }
    ]
  }
];

export default function FeaturedCategories() {
  const [activeIndexes, setActiveIndexes] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0
  });

  const scroll = (categoryId: number, direction: "left" | "right") => {
    setActiveIndexes(prev => {
      const category = categories.find(c => c.id === categoryId);
      if (!category) return prev;
      
      const currentIndex = prev[categoryId] || 0;
      const maxIndex = category.products.length - 1;
      
      let newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
      if (newIndex < 0) newIndex = maxIndex;
      if (newIndex > maxIndex) newIndex = 0;
      
      return { ...prev, [categoryId]: newIndex };
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Promotional Banner */}
          <div className="bg-gray-200 rounded-lg overflow-hidden relative h-full min-h-[600px] flex flex-col">
            <div className="relative w-full h-64 bg-gray-200">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white font-bold px-4 py-2 rounded text-sm">
                  RÉDUCTION DE 35%
                </span>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80"
                alt="Ferrari"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 text-left">
                Ferrari Laferrari Voiture Métal
              </h3>
            </div>
          </div>

          {/* Product Categories */}
          {categories.map((category, index) => {
            const currentIndex = activeIndexes[category.id] || 0;
            const currentProduct = category.products[currentIndex];

             return (
               <div key={category.id} className="bg-white rounded-lg p-6 border border-gray-200">
                 {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => scroll(category.id, "left")}
                      className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scroll(category.id, "right")}
                      className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                 {/* Products */}
                 <div className="space-y-10">
                  {category.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.id}`}
                      className="block group"
                    >
                      <div className="flex gap-4 items-start">
                        {/* Product Image */}
                        <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                          {product.discount > 0 && (
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                              -{product.discount}%
                            </span>
                          )}
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-2 group-hover:scale-110 transition-transform"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0 pt-1">
                          {/* Rating */}
                          <div className="mb-2">
                            {renderStars(product.rating)}
                          </div>

                          <h4 className="text-base font-normal text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                            {product.name}
                          </h4>

                          {/* Price */}
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-900">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-base text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

