import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, getProducts } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";
import { Package, Shield, Truck, CheckCircle, XCircle } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info */}
        <div>
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {product.category}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-primary">
              {product.price.toFixed(2)}€
            </span>
            {product.inStock ? (
              <span className="flex items-center text-green-600 font-medium">
                <CheckCircle className="mr-2" size={20} />
                En stock
              </span>
            ) : (
              <span className="flex items-center text-red-600 font-medium">
                <XCircle className="mr-2" size={20} />
                Rupture de stock
              </span>
            )}
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <AddToCartButton product={product} />

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Truck className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Livraison Rapide</h3>
                <p className="text-xs text-gray-600">24-48h</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Garantie</h3>
                <p className="text-xs text-gray-600">2 ans</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Package className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Kit Inclus</h3>
                <p className="text-xs text-gray-600">Installation</p>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mt-8 pt-8 border-t">
              <h2 className="text-xl font-bold mb-4">Spécifications</h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                {product.brand && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Marque:</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Produits Similaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

