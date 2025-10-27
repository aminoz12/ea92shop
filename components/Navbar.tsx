"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, ChevronDown, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

const categories = [
  { id: 1, name: "ECLAIRAGE", icon: "/images/eclairage1.png", slug: "eclairage" },
  { id: 2, name: "PARE-CHOC", icon: "/images/parchoc1.png", slug: "pare-choc" },
  { id: 3, name: "GRILLE / CALANDRE", icon: "/images/grille1.png", slug: "grille-calandre" },
  { id: 4, name: "CAPOT", icon: "/images/capo1.png", slug: "capot" },
  { id: 5, name: "AILE", icon: "/images/aile1.png", slug: "aile" },
  { id: 6, name: "ACCESSOIRE", icon: "/images/accessoire1.png", slug: "accessoire" },
  { id: 7, name: "CACHE SOUS MOTEUR", icon: "/images/cache1.png", slug: "cache-sous-moteur" },
  { id: 8, name: "ARMATURE", icon: "/images/armature1.png", slug: "armature" },
  { id: 9, name: "RÉTROVISEUR", icon: "/images/retro1.png", slug: "retroviseur" },
  { id: 10, name: "HAYON / PORTE", icon: "/images/porte1.png", slug: "hayon-porte" },
  { id: 11, name: "VITRAGE", icon: "/images/vitrage1.png", slug: "vitrage" },
  { id: 12, name: "MÉCANIQUE", icon: "/images/mecanique1.png", slug: "mecanique" }
];


export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showCatalogueDropdown, setShowCatalogueDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogueOpen, setMobileCatalogueOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCartStore();
  const totalItems = getTotalItems();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    setMobileCatalogueOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Top Navigation */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[70px] sm:h-[80px] lg:h-[100px]">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="REPIAUTO"
                  width={150}
                  height={50}
                  className="object-contain sm:w-[180px] lg:w-[220px]"
                  priority
                />
              </Link>

              {/* Main Navigation - Desktop */}
              <nav className="hidden lg:flex items-center space-x-10">
                <Link href="/" className="text-[#1a2b42] hover:text-[#ff5757] font-semibold text-[15px] tracking-wide uppercase">
                  ACCUEIL
                </Link>
                <Link href="#" className="text-[#1a2b42] hover:text-[#ff5757] font-semibold text-[15px] tracking-wide uppercase flex items-center gap-1">
                  VÉHICULE
                  <ChevronDown size={16} strokeWidth={2.5} />
                </Link>
                <div 
                  className="relative"
                  onMouseEnter={() => setShowCatalogueDropdown(true)}
                  onMouseLeave={() => setShowCatalogueDropdown(false)}
                >
                  <Link href="/shop" className="text-[#ff5757] hover:text-[#ff5757] font-semibold text-[15px] tracking-wide uppercase flex items-center gap-1">
                    CATALOGUE
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {showCatalogueDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="bg-white shadow-2xl rounded-lg border border-gray-100 w-[900px]">
                        <div className="p-8">
                          <div className="grid grid-cols-6 gap-6">
                            {categories.map((category) => (
                              <Link
                                key={category.id}
                                href={`/shop?category=${category.slug}`}
                                className="flex flex-col items-center gap-3 p-4 hover:bg-gray-50 rounded-lg transition-all group"
                              >
                                <div className="w-16 h-16 flex items-center justify-center">
                                  <Image
                                    src={category.icon}
                                    alt={category.name}
                                    width={64}
                                    height={64}
                                    className="object-contain group-hover:scale-110 transition-transform"
                                  />
                                </div>
                                <span className="text-[#1a2b42] text-[11px] font-bold uppercase tracking-wide text-center leading-tight">
                                  {category.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/blog" className="text-[#1a2b42] hover:text-[#ff5757] font-semibold text-[15px] tracking-wide uppercase">
                  BLOG
                </Link>
                <Link href="#" className="text-[#1a2b42] hover:text-[#ff5757] font-semibold text-[15px] tracking-wide uppercase">
                  CONTACT
                </Link>
              </nav>

              {/* Right Side - Desktop */}
              <div className="hidden lg:flex items-center gap-8">
                <Link href="#" className="flex items-center gap-2 text-[#1a2b42] hover:text-[#ff5757] transition-colors">
                  <User size={20} strokeWidth={2} />
                  <span className="font-semibold text-[14px] uppercase tracking-wide">MON COMPTE</span>
                </Link>
                <button
                  onClick={toggleCart}
                  className="flex items-center gap-3 text-[#1a2b42] hover:text-[#ff5757] transition-colors"
                >
                  <span className="font-semibold text-[14px] uppercase tracking-wide">MON PANIER</span>
                  <span className="text-[#ff5757] font-bold text-[15px]">0,00 €</span>
                  <div className="relative">
                    <ShoppingCart size={22} strokeWidth={2} />
                    {mounted && totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#ff5757] text-white text-[11px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </button>
              </div>

              {/* Mobile Menu Button & Cart */}
              <div className="flex lg:hidden items-center gap-3">
                <button
                  onClick={toggleCart}
                  className="relative p-2 text-[#1a2b42] hover:text-[#ff5757] transition-colors"
                  aria-label="Cart"
                >
                  <ShoppingCart size={24} strokeWidth={2} />
                  {mounted && totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#ff5757] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-[#1a2b42] hover:text-[#ff5757] transition-colors"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[70px] sm:top-[80px] bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-[70px] sm:top-[80px] right-0 h-[calc(100vh-70px)] sm:h-[calc(100vh-80px)] w-[280px] sm:w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:hidden overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="flex flex-col p-6 space-y-2">
            <Link href="/" className="text-[#1a2b42] hover:bg-gray-50 font-semibold text-[15px] tracking-wide uppercase py-3 px-4 rounded-lg transition-colors">
              ACCUEIL
            </Link>
            <Link href="#" className="text-[#1a2b42] hover:bg-gray-50 font-semibold text-[15px] tracking-wide uppercase py-3 px-4 rounded-lg transition-colors flex items-center justify-between">
              VÉHICULE
              <ChevronDown size={16} strokeWidth={2.5} />
            </Link>
            
            {/* Mobile Catalogue Dropdown */}
            <div>
              <button
                onClick={() => setMobileCatalogueOpen(!mobileCatalogueOpen)}
                className="w-full text-left text-[#ff5757] hover:bg-gray-50 font-semibold text-[15px] tracking-wide uppercase py-3 px-4 rounded-lg transition-colors flex items-center justify-between"
              >
                CATALOGUE
                <ChevronDown size={16} strokeWidth={2.5} className={`transform transition-transform ${mobileCatalogueOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCatalogueOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/shop?category=${category.slug}`}
                      className="flex items-center gap-3 py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                    >
                      <div className="w-8 h-8 flex-shrink-0">
                        <Image
                          src={category.icon}
                          alt={category.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[#1a2b42] text-[12px] font-semibold uppercase">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/blog" className="text-[#1a2b42] hover:bg-gray-50 font-semibold text-[15px] tracking-wide uppercase py-3 px-4 rounded-lg transition-colors">
              BLOG
            </Link>
            <Link href="#" className="text-[#1a2b42] hover:bg-gray-50 font-semibold text-[15px] tracking-wide uppercase py-3 px-4 rounded-lg transition-colors">
              CONTACT
            </Link>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <Link href="#" className="flex items-center gap-3 text-[#1a2b42] hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors">
              <User size={20} strokeWidth={2} />
              <span className="font-semibold text-[14px] uppercase tracking-wide">MON COMPTE</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-3 text-[#1a2b42] hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors">
              <ShoppingCart size={20} strokeWidth={2} />
              <span className="font-semibold text-[14px] uppercase tracking-wide">MON PANIER</span>
              {mounted && totalItems > 0 && (
                <span className="bg-[#ff5757] text-white text-[11px] rounded-full w-6 h-6 flex items-center justify-center font-bold ml-auto">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      {/* Search Bar - Only show on home page */}
      {isHomePage && (
        <div className="bg-[#e8ebef]">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Recherche par pièce, marque ou modèle..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-gray-700 placeholder:text-[#7a8a9e] placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#1a2b42] text-sm sm:text-[15px] pr-14"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1a2b42] hover:bg-[#2a3b52] text-white p-2.5 sm:p-3 rounded-full">
                <Search size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
