"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const trendingProducts = [
  {
    id: 1,
    name: "Haut-parleurs Coaxiaux Haute-Fidélité JBL",
    brand: "Craftsman",
    price: 250.00,
    originalPrice: 290.00,
    discount: 13,
    rating: 0,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    slug: "jbl-speakers"
  },
  {
    id: 2,
    name: "Vitesse Engagée à Haute Vitesse en Voiture",
    brand: "Black & Decker",
    price: 200.00,
    originalPrice: 230.00,
    discount: 13,
    rating: 5,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    slug: "gear-shifter"
  },
  {
    id: 3,
    name: "Vitesse Engagée à Haute Vitesse Rouge",
    brand: "Stanley",
    price: 250.00,
    originalPrice: null,
    discount: 0,
    rating: 5,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
    slug: "red-gear"
  },
  {
    id: 4,
    name: "Enjoliveur de Roue Capuchon Automobile",
    brand: "Stanley",
    price: 72.00,
    originalPrice: 79.00,
    discount: 8,
    rating: 5,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
    slug: "wheel-cover"
  },
  {
    id: 5,
    name: "Vitesse Engagée à Haute Vitesse en Voiture",
    brand: "Bostitch",
    price: 90.00,
    originalPrice: 97.00,
    discount: 7,
    rating: 0,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
    slug: "car-gear"
  },
  {
    id: 6,
    name: "Enjoliveur de Roue Noir Capuchon Automobile",
    brand: "Black & Decker",
    price: 250.00,
    originalPrice: null,
    discount: 0,
    rating: 4,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80",
    slug: "black-wheel-cover"
  }
];

export default function TrendingProducts() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      if (isHovered) return;
      
      const itemWidth = 288 + 24; // w-72 (288px) + gap-6 (24px)
      const totalItems = trendingProducts.length;
      const singleSetWidth = itemWidth * totalItems;

      // Smoothly scroll
      container.scrollLeft += 1;

      // When we've scrolled through one complete set, instantly reset to the beginning
      if (container.scrollLeft >= singleSetWidth) {
        container.scrollLeft = 0;
      }
    }, 30);

    return () => clearInterval(autoScroll);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 350;
    const itemWidth = 288 + 24;
    const totalItems = trendingProducts.length;
    const singleSetWidth = itemWidth * totalItems;
    
    if (direction === "left") {
      const newPosition = container.scrollLeft - scrollAmount;
      if (newPosition < 0) {
        container.scrollLeft = singleSetWidth + newPosition;
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      const newPosition = container.scrollLeft + scrollAmount;
      if (newPosition >= singleSetWidth) {
        container.scrollLeft = newPosition - singleSetWidth;
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
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
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6 sm:mb-8 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-1 sm:mb-2">Produits Tendance</h2>
            <p className="text-sm sm:text-base text-gray-600">Découvrez nos articles les plus vendus</p>
          </div>
          <div className="hidden sm:flex gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto hide-scrollbar pb-2"
        >
          {[...trendingProducts, ...trendingProducts].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-60 sm:w-64 lg:w-72 group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <Link href={`/shop/${product.slug}`} className="relative block h-52 sm:h-56 lg:h-64 bg-gray-100">
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 sm:px-3 rounded-lg z-10">
                      -{product.discount}%
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Product Info */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">{product.brand}</p>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Rating */}
                  <div className="mb-3">
                    {renderStars(product.rating)}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gray-900 hover:bg-primary text-white font-medium py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                    AJOUTER AU PANIER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
          <Link 
            href="/shop"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-primary text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Voir tous les produits
            <ChevronRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

