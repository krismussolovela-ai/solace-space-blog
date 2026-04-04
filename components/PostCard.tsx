import Link from "next/link";
import type { Post } from "@/lib/posts";

interface Props {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: Props) {
  return (
    <article className="group">
      {/* Image placeholder */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={`${featured ? "aspect-[4/3]" : "aspect-[3/2]"} bg-clay-light rounded-sm overflow-hidden mb-5`}
        >
          {post.image ? (
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-clay-light to-clay opacity-50 group-hover:opacity-60 transition-opacity" />
          )}
        </div>
      </Link>

      {/* Meta */}
      <Link
        href={`/blog/category/${post.category.toLowerCase().replace(/ /g, "-")}`}
        style={{ fontFamily: "var(--font-jost)" }}
        className="inline-block text-xs tracking-[0.15em] uppercase text-clay mb-2 hover:text-brown-muted transition-colors"
      >
        {post.category}
      </Link>

      {/* Title */}
      <Link href={`/blog/${post.slug}`}>
        <h3
          style={{ fontFamily: "var(--font-cormorant)" }}
          className={`${featured ? "text-3xl" : "text-2xl"} font-light text-deep-brown leading-tight group-hover:text-brown-muted transition-colors line-clamp-2`}
        >
          {post.title}
        </h3>
      </Link>

      {/* Description */}
      <p
        style={{ fontFamily: "var(--font-jost)" }}
        className="mt-2 text-sm text-brown-muted font-light leading-relaxed line-clamp-3"
      >
        {post.description}
      </p>

      {/* Footer */}
      <div className="mt-3 flex items-center gap-3">
        <span
          style={{ fontFamily: "var(--font-jost)" }}
          className="text-xs text-clay"
        >
          {post.readingTime}
        </span>
        <span className="text-clay-light text-xs">·</span>
        <time
          style={{ fontFamily: "var(--font-jost)" }}
          className="text-xs text-clay"
          dateTime={post.date}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    </article>
  );
}
