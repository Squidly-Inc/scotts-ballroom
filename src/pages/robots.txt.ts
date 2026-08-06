import type { APIRoute } from "astro";

// Allow-all on purpose: AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended) are welcome alongside search engines.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const sitemapURL = new URL(`${base}/sitemap-index.xml`, site);

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
