import type { BlogPost } from '../types/blog';

export function getCategories(posts: BlogPost[]): string[] {
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

export function filterPostsByCategory(posts: BlogPost[], category: string | undefined): BlogPost[] {
  if (!category) return posts;
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}