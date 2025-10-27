"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Lightbulb, Wrench, Wind, BoxSelect } from "lucide-react";

const categories = [
  {
    name: "Pare-chocs",
    slug: "pare-chocs",
    icon: Car,
    description: "Pare-chocs avant et arrière",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Éclairages (phares, feux, antibrouillards)",
    slug: "eclairages",
    icon: Lightbulb,
    description: "Phares, feux arrière, antibrouillards",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Ailes & Passages de roues",
    slug: "ailes-passages-roues",
    icon: Wrench,
    description: "Ailes avant, arrière et passages de roues",
    color: "from-red-500 to-red-700",
  },
  {
    name: "Radiateurs & Refroidissement",
    slug: "radiateurs-refroidissement",
    icon: Wind,
    description: "Radiateurs eau, clim, intercooler",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "Calandres & Grilles avant",
    slug: "calandres-grilles-avant",
    icon: BoxSelect,
    description: "Calandres et grilles avant",
    color: "from-gray-500 to-gray-700",
  },
  {
    name: "Capots & Hayons",
    slug: "capots-hayons",
    icon: Car,
    description: "Capots moteur et hayons",
    color: "from-green-500 to-green-700",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-3">
            Nos Catégories
          </h2>
          <p className="text-gray-600 text-lg">
            Trouvez rapidement les pièces dont vous avez besoin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/shop?category=${category.slug}`}>
                  <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-5`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] line-clamp-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-primary">
                      Explorer
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

