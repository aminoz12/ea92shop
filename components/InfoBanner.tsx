"use client";

export default function InfoBanner() {
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
          {/* Black Banner - Livraison Gratuite */}
          <div className="flex-1 bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-center relative">
            <div className="text-center md:text-left z-10">
              <p className="text-sm sm:text-base lg:text-lg font-semibold">
                Livraison Gratuite Depuis 299€ dans 24 heures
              </p>
            </div>
            {/* Diagonal cut on the right */}
            <div className="hidden md:block absolute -right-8 top-0 bottom-0 w-16 bg-gray-900 transform skew-x-12"></div>
          </div>

          {/* Red Banner - Retrait Gratuit */}
          <div className="flex-1 bg-red-500 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 relative">
            {/* Diagonal cut on the left */}
            <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-16 bg-red-500 transform -skew-x-12"></div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=magasin+pieces+auto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base lg:text-lg font-semibold hover:underline z-10 cursor-pointer text-center sm:text-left"
            >
              Retrait Gratuit Depuis Notre Magasin !
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=magasin+pieces+auto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2 z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nous Localiser
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

