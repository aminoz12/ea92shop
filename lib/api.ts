import { Product, Category } from "@/types";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return productsData as unknown as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const product = productsData.find((p) => p.slug === slug);
  return product ? (product as unknown as Product) : null;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return productsData.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  ) as unknown as Product[];
}

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return categoriesData as Category[];
}

export function filterProducts(
  products: Product[],
  filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }
): Product[] {
  let filtered = [...products];

  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === filters.category?.toLowerCase()
    );
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}

