"use client";
import React, { useState } from "react";
import Image from "next/image";

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  author: string;
  authorImage: string;
  image?: string;
  featured?: boolean;
}

interface NewsCategory {
  id: string;
  label: string;
  isActive?: boolean;
}

const AuthorInfo: React.FC<{ author: string; authorImage: string }> = ({
  author,
  authorImage,
}) => (
  <div className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-300">
      <Image
        src={authorImage}
        alt={author}
        width={44}
        height={44}
        className="object-cover"
      />
    </div>
    <span className="text-base text-black">{author}</span>
  </div>
);

const FeaturedNewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="w-full max-w-96">
    {/* Image */}
    <div className="relative h-[248px] rounded-[40px] overflow-hidden border border-gray-300 mb-3">
      <Image
        src={article.image || "/default-news.jpg"}
        alt={article.title}
        fill
        className="object-cover"
      />
    </div>

    {/* Content */}
    <div className="">
      <p className="text-base text-black mb-1">{article.date}</p>
      <h3 className="text-xl md:text-3xl font-bold text-black leading-tight mb-3">
        {article.title}
      </h3>
      <AuthorInfo author={article.author} authorImage={article.authorImage} />
    </div>
  </div>
);

const NewsListItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="pb-6 first:pt-0">
    <div className="">
      <p className="text-base text-black mb-1">{article.date}</p>
      <h4 className="text-2xl font-bold text-black mb-4">{article.title}</h4>
      <AuthorInfo author={article.author} authorImage={article.authorImage} />
    </div>
    <div className="w-full h-px bg-black mt-6"></div>
  </div>
);

const CategoryTab: React.FC<{
  category: NewsCategory;
  isActive: boolean;
  onClick: () => void;
}> = ({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 text-lg rounded-full transition-all ${
      isActive
        ? "bg-[#455DBD] text-white font-semibold"
        : "bg-white text-black border border-gray-300 hover:bg-gray-50"
    }`}
  >
    {category.label}
  </button>
);

const LatestNewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("premier-league");

  const categories: NewsCategory[] = [
    { id: "premier-league", label: "Premier League" },
    { id: "champions-league", label: "Champions League" },
    { id: "american-sport", label: "American Sport" },
    { id: "betting-tips", label: "Betting Tips" },
    { id: "transfers", label: "Transfers" },
    { id: "fifa-world-cup", label: "FIFA World Cup" },
    { id: "nfl", label: "NFL" },
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Top 5 Bets for Today's Games",
      date: "10 Nov 2025",
      author: "John Doe",
      authorImage: "/author.png",
      image: "/news.png",
      featured: true,
    },
    {
      id: 2,
      title: "Top 5 Bets for Today's Games",
      date: "10 Nov 2025",
      author: "John Doe",
      authorImage: "/author.png",
      image: "/news.png",
      featured: true,
    },
    {
      id: 3,
      title: "Top 5 Bets for Today's Games",
      date: "10 Nov 2025",
      author: "John Doe",
      authorImage: "/author.png",
    },
    {
      id: 4,
      title: "Top 5 Bets for Today's Games",
      date: "10 Nov 2025",
      author: "John Doe",
      authorImage: "/author.png",
    },
    {
      id: 5,
      title: "Top 5 Bets for Today's Games",
      date: "10 Nov 2025",
      author: "John Doe",
      authorImage: "/author.png",
    },
  ];

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const listArticles = newsArticles.filter((article) => !article.featured);

  return (
    <section
      id="news"
      className="py-20"
      style={{ backgroundColor: "rgba(243, 244, 233, 0.59)" }}
    >
      <div className="max-w-[100rem] mx-auto flex items-center justify-center">
        <div className="  flex items-center justify-center md:justify-start md:items-start flex-col mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8">
              Latest News and Previews
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {categories.map((category) => (
                <CategoryTab
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>

          {/* News Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Articles */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <FeaturedNewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* News List */}
            <div className="lg:col-span-4">
              <div className=" rounded-lg p-6">
                {listArticles.map((article, index) => (
                  <div key={article.id}>
                    <NewsListItem article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
