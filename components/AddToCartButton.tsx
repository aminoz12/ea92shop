"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/lib/store/cartStore";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = () => {
    if (mounted) {
      addItem(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      disabled={!product.inStock || added}
      whileHover={{ scale: product.inStock ? 1.02 : 1 }}
      whileTap={{ scale: product.inStock ? 0.98 : 1 }}
      className={`w-full py-4 px-8 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors ${
        !product.inStock
          ? "bg-gray-300 cursor-not-allowed text-gray-500"
          : added
          ? "bg-green-600 text-white"
          : "bg-primary hover:bg-primary-dark text-white"
      }`}
    >
      {added ? (
        <>
          <Check className="mr-2" size={24} />
          Ajouté au panier
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2" size={24} />
          {product.inStock ? "Ajouter au panier" : "Indisponible"}
        </>
      )}
    </motion.button>
  );
}

