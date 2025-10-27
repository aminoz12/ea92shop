"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Éclairage",
    icon: "💡",
    image: "/images/eclairage2.png",
    items: [
      "Phare avant",
      "Feu arrière",
      "Feu antibrouillard",
      "Feu clignotant",
      "Feu éclaireur de plaque",
      "Feu diurne / Feu de jour"
    ]
  },
  {
    id: 2,
    name: "Rétroviseur",
    icon: "🪞",
    image: "/images/retro2.png",
    items: [
      "Rétroviseur manuel",
      "Rétroviseur électrique",
      "Rétroviseur intérieur",
      "Coque",
      "Verre"
    ]
  },
  {
    id: 3,
    name: "Pare-Choc",
    icon: "🚗",
    image: "/images/parchoc2.png",
    items: [
      "Pare-choc avant",
      "Pare-choc arrière",
      "Spoiler",
      "Moulure",
      "Baguette",
      "Cache crochet"
    ]
  },
  {
    id: 4,
    name: "Grille / Calandre",
    icon: "▦",
    image: "/images/grille2.png",
    items: [
      "Grille de pare-choc",
      "Calandre",
      "Enjoliveur de feu"
    ]
  },
  {
    id: 5,
    name: "Capot",
    icon: "🔧",
    image: "/images/capo2.png",
    items: [
      "Capot",
      "Compas capot moteur",
      "Insonorisant"
    ]
  },
  {
    id: 6,
    name: "Aile",
    icon: "🛡️",
    image: "/images/aile2.png",
    items: [
      "Aile",
      "Élargisseur d'aile",
      "Pare-boue",
      "Bas de caisse"
    ]
  },
  {
    id: 7,
    name: "Vitrage",
    icon: "🪟",
    image: "/images/vitrage2.png",
    items: [
      "Pare-brise",
      "Vitre latérale",
      "Lunette arrière"
    ]
  },
  {
    id: 8,
    name: "Cache Sous Moteur",
    icon: "🔩",
    image: "/images/cache2.png",
    items: [
      "Cache sous moteur"
    ]
  },
  {
    id: 9,
    name: "Armature",
    icon: "⚙️",
    image: "/images/armature2.png",
    items: [
      "Renfort de pare-choc",
      "Face avant",
      "Support",
      "Berceau moteur"
    ]
  },
  {
    id: 10,
    name: "Hayon / Porte",
    icon: "🚪",
    image: "/images/porte2.png",
    items: [
      "Hayon",
      "Porte"
    ]
  },
  {
    id: 11,
    name: "Mécanique",
    icon: "🔧",
    image: "/images/mecanique2.png",
    items: [
      "Compresseur de climatisation",
      "Condenseur",
      "Intercooler",
      "Radiateur",
      "Ventilateur"
    ]
  },
  {
    id: 12,
    name: "Accessoire",
    icon: "🛠️",
    image: "/images/accessoire2.png",
    items: [
      "Capteur de stationnement",
      "Essuie glace",
      "Interrupteur",
      "Lève vitre",
      "Poignée de porte / Serrure",
      "Vérin",
      "Kit de montage"
    ]
  }
];

const carouselSlides = [
  {
    id: 1,
    category: "pare-choc",
    categoryName: "pare-choc",
    title: "Un",
    subtitle: "à remplacer?",
    solution: "On a la solution",
    cta: "Trouvez votre modèle",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80",
    useGradient: false,
    gradient: "",
    link: "/shop?category=pare-choc"
  },
  {
    id: 2,
    category: "rétroviseur",
    categoryName: "rétroviseur",
    title: "Un",
    subtitle: "cassé?",
    solution: "On a la solution",
    cta: "Trouvez votre modèle",
    image: "/images/retro2.png",
    useGradient: false,
    gradient: "",
    link: "/shop?category=retroviseur"
  },
  {
    id: 3,
    category: "phare",
    categoryName: "phare",
    title: "Un",
    subtitle: "à changer?",
    solution: "On a la solution",
    cta: "Trouvez votre modèle",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&q=80",
    useGradient: false,
    gradient: "",
    link: "/shop?category=eclairage"
  }
];

export default function AutoPartsCategories() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Text and Carousel */}
        <div className="mb-8 sm:mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a3a52] mb-4 sm:mb-6 leading-tight uppercase">
              PLUS DE <span className="text-primary">30 000</span> PIÈCES<br />
              DE CARROSSERIE NEUVES<br />
              POUR VOTRE VOITURE.
            </h2>
            <p className="text-[#1a3a52] text-base sm:text-xl lg:text-2xl xl:text-[28px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Des pièces auto homologuées,<br />
              compatibles, livrées rapidement<br />
              et toujours au meilleur prix.
            </p>
          </div>

          {/* Right: Carousel */}
          <div className="relative h-[250px] sm:h-[280px] lg:h-[320px] w-full rounded-2xl overflow-hidden shadow-2xl">
            {carouselSlides.map((slide, index) => (
              <Link
                key={slide.id}
                href={slide.link}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Background - Either Image or Gradient */}
                {slide.useGradient ? (
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
                ) : (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    {/* Dark Overlay for images */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                  </>
                )}
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 lg:px-12 text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    {slide.title} <span className="underline decoration-2 underline-offset-4">{slide.categoryName}</span> {slide.subtitle}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">
                    {slide.solution}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg lg:text-xl">
                    <span>{slide.cta}</span>
                    <ChevronRight size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={3} />
                  </div>
                </div>
              </Link>
            ))}

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {category.name}
                </h3>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 group/image">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover/image:scale-[2]"
                  />
                </div>
              </div>

              {/* Category Items */}
              <ul className="space-y-1.5 sm:space-y-2">
                {category.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/shop?category=${category.name.toLowerCase()}&item=${item}`}
                      className="text-xs sm:text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-primary">›</span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

