"use client";

import Link from "next/link";
import Image from "next/image";

export default function SpecialOffers() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Banner - Yellow */}
          <Link href="/shop" className="group">
            <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 flex items-center">
              <div className="flex-1 p-6 sm:p-8 lg:p-12">
                <p className="text-gray-800 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                  NEW SPECIAL OFFER
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                  Motul 4100 Power<br />
                  5W30 3L
                </h3>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg transition-colors text-xs sm:text-sm">
                  SHOP NOW
                </button>
              </div>
              
              <div className="relative flex-1 h-full hidden sm:block">
                {/* Badge 30% OFF */}
                <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-10">
                  <div className="bg-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold leading-none">30%</div>
                      <div className="text-[10px] sm:text-xs font-semibold">OFF</div>
                    </div>
                  </div>
                </div>
                
                {/* Product Image */}
                <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <Image
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80"
                    alt="Motul Oil"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Right Banner - Blue */}
          <Link href="/shop" className="group">
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 flex items-center">
              <div className="flex-1 p-6 sm:p-8 lg:p-12">
                <p className="text-blue-100 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                  NEW SPECIAL OFFER
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                  Jeep Patriot 17 Inch<br />
                  Steel Rim
                </h3>
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg transition-colors text-xs sm:text-sm">
                  SHOP NOW
                </button>
              </div>
              
              <div className="relative flex-1 h-full hidden sm:block">
                {/* Product Image */}
                <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <Image
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
                    alt="Steel Rim"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

