"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  featured: boolean;
  readTime: string;
}

export default function FeaturedArticles() {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetch("/data/blog.json");
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        const featured = data.filter((post: BlogPost) => post.featured).slice(0, 5);
        setArticles(featured);
      } catch (error) {
        console.error("Error loading articles:", error);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  if (loading || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2b42] mb-2 sm:mb-4">
              Articles à la Une
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Découvrez nos conseils et guides pour l&apos;entretien de votre véhicule
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-[#1a2b42] hover:bg-[#ff5757] text-white font-semibold rounded-lg transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            Voir tous les articles
            <ArrowRight size={18} className="lg:w-5 lg:h-5" />
          </Link>
        </div>

        {/* Featured Article (First One - Large) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group lg:col-span-2">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className="bg-[#ff5757] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide">
                    {articles[0].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{new Date(articles[0].date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#ff5757] transition-colors">
                  {articles[0].title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {articles[0].excerpt}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-gray-500 text-xs sm:text-sm">Par {articles[0].author}</span>
                  <Link
                    href={`/blog/${articles[0].slug}`}
                    className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1a2b42] hover:bg-[#ff5757] text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap"
                  >
                    Lire l&apos;article
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Other Featured Articles (4 smaller ones) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {articles.slice(1, 5).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className="bg-[#ff5757] text-white px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500 mb-2 sm:mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ff5757] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="flex items-center gap-1 text-[#ff5757] font-semibold text-xs sm:text-sm hover:gap-2 transition-all"
                >
                  Lire plus
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "View All" Button */}
        <div className="flex justify-center mt-6 sm:mt-8 md:hidden">
          <Link
            href="/blog"
            className="flex items-center gap-2 px-6 py-3 bg-[#1a2b42] hover:bg-[#ff5757] text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Voir tous les articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

