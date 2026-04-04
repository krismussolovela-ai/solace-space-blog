"use client";

import { useState } from "react";
import { PostCard } from "@/components/PostCard";
import type { Post } from "@/lib/posts";

const CATEGORIES = ["All", "Rituals", "Reflections", "Guides", "Field Notes", "Objects"];
const PER_PAGE = 6;

interface Props {
  posts: Post[];
  initialCategory?: string;
}

export function BlogListing({ posts, initialCategory }: Props) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "All");
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div className="px-6 max-w-5xl mx-auto pb-24">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-clay-light pb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            style={{ fontFamily: "var(--font-jost)" }}
            className={`text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full transition-all ${
              activeCategory === cat
                ? "bg-deep-brown text-cream"
                : "text-brown-muted hover:text-deep-brown border border-clay-light hover:border-clay"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {paginated.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {paginated.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p
            style={{ fontFamily: "var(--font-cormorant)" }}
            className="text-3xl font-light text-brown-muted"
          >
            No posts in this category yet.
          </p>
          <p
            style={{ fontFamily: "var(--font-jost)" }}
            className="mt-3 text-sm text-brown-muted opacity-60"
          >
            Check back soon.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{ fontFamily: "var(--font-jost)" }}
              className={`w-9 h-9 text-sm transition-all ${
                page === i + 1
                  ? "bg-deep-brown text-cream rounded-full"
                  : "text-brown-muted hover:text-deep-brown"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
