import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  category: string;
  author: string;
  image?: string;
  imageAlt?: string;
  readingTime: string;
  cta?: { text: string; url: string };
  contentHtml: string;
  excerpt: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  const readingTime =
    data.readingTime || calculateReadingTime(content);
  const excerpt = content.slice(0, 200).replace(/[#*`]/g, "").trim() + "…";

  return {
    slug: data.slug || slug,
    title: data.title || "",
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    keywords: data.keywords || [],
    category: data.category || "Reflections",
    author: data.author || "Solace Space",
    image: data.image,
    imageAlt: data.imageAlt,
    readingTime,
    cta: data.cta,
    contentHtml,
    excerpt,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => getPostBySlug(name.replace(/\.md$/, "")))
  );

  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
