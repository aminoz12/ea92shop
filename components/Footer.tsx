import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <div className="mb-3 sm:mb-4">
              <Image
                src="/images/logo.png"
                alt="EspaceAuto92 Carosserie"
                width={80}
                height={80}
                className="sm:w-[100px] sm:h-[100px] object-contain"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Votre partenaire de confiance pour toutes vos pièces automobiles.
              Qualité premium et service exceptionnel.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Liens Rapides</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-primary transition-colors">
                  Panier
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-gray-400 hover:text-primary transition-colors">
                  Commander
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Catégories</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/shop?category=carrosserie"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Carrosserie
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=ailes"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Ailes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=eclairage"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Éclairage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] mt-1 flex-shrink-0" />
                <span>123 Rue de l&apos;Auto, 75001 Paris, France</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>contact@espaceauto92.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EspaceAuto92 Carosserie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

