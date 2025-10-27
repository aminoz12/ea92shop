"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Package } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/lib/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [mounted, setMounted] = useState(false);
  const { addItem } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (mounted) {
      addItem(product);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/shop/${product.slug}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-all duration-500"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  Rupture de stock
                </span>
              </div>
            )}
            {product.inStock && (
              <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
                <Package size={16} />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-gray-500 uppercase mb-1">
              {product.category}
            </p>
            <h3 className="font-semibold text-gray-900 mb-2 h-12 overflow-hidden">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 h-10 overflow-hidden">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                {product.price.toFixed(2)}€
              </span>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`p-3 rounded-lg ${
                  product.inStock
                    ? "bg-primary hover:bg-red-700 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                <ShoppingCart size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

