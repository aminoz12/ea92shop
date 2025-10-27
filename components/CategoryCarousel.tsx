"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Pare-chocs",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
    slug: "pare-chocs"
  },
  {
    id: 2,
    name: "Calandres & Grilles avant",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80",
    slug: "calandres-grilles-avant"
  },
  {
    id: 3,
    name: "Rétroviseurs & Coques",
    image: "https://images.unsplash.com/photo-1597821839061-2dc89f4f6d4a?w=400&q=80",
    slug: "retroviseurs-coques"
  },
  {
    id: 4,
    name: "Éclairages (phares, feux, antibrouillards)",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    slug: "eclairages"
  },
  {
    id: 5,
    name: "Ailes & Passages de roues",
    image: "https://images.unsplash.com/photo-1552519507-cf90cd659d4b?w=400&q=80",
    slug: "ailes-passages-roues"
  },
  {
    id: 6,
    name: "Radiateurs & Refroidissement (eau, clim, intercooler)",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
    slug: "radiateurs-refroidissement"
  },
  {
    id: 7,
    name: "Capots & Hayons",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
    slug: "capots-hayons"
  },
  {
    id: 8,
    name: "Renforts & Traverses avant/arrière",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80",
    slug: "renforts-traverses"
  },
  {
    id: 9,
    name: "Buses d'air & Conduits",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80",
    slug: "buses-air-conduits"
  },
];

export default function CategoryCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      if (isHovered) return;
      
      const itemWidth = 224 + 24; // w-56 (224px) + gap-6 (24px)
      const totalItems = categories.length;
      const singleSetWidth = itemWidth * totalItems;

      // Smoothly scroll
      container.scrollLeft += 1;

      // When we've scrolled through one complete set, instantly reset to the beginning
      // This creates a seamless infinite loop
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
    const itemWidth = 224 + 24;
    const totalItems = categories.length;
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-2">Parcourir par Catégorie</h2>
            <p className="text-gray-600">Découvrez notre collection</p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-11 h-11 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-11 h-11 flex items-center justify-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto hide-scrollbar"
        >
          {[...categories, ...categories].map((category, index) => (
            <Link
              key={`${category.id}-${index}`}
              href={`/shop?category=${category.slug}`}
              className="flex-shrink-0 group"
            >
              <div className="w-56">
                <div className="relative h-56 mb-3 rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors leading-tight min-h-[2.5rem] line-clamp-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

