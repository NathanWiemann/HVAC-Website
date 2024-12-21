export interface BlogPost {
  title: string;
  description: string;
  publishDate: Date;
  category: string;
  slug: string;
  featured?: boolean;
  content: string;
}