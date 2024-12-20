import type { APIRoute } from 'astro';

const baseUrl = 'https://berkscountyhvac.com';

// List all your static routes
const staticPages = [
  '',
  '/services',
  '/contact',
  '/blog',
  '/locations',
  '/services/cooling',
  '/services/heating',
  '/services/ductwork',
  '/services/generators',
  '/services/mini-split',
  '/services/ductless'
];

// Generate sitemap XML
function generateSitemapXml(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>${url === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;
}

export const GET: APIRoute = async () => {
  return new Response(
    generateSitemapXml(staticPages),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
};