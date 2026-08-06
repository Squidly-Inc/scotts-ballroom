import type { APIRoute } from "astro";

// Plain-text overview for AI engines (llms.txt convention).
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const abs = (p: string) => new URL(`${base}${p}`, site).href;

  const body = `# Scott's Ballroom

Scott's Ballroom is an event venue occupying the entire 7th floor of the Rotary Summit Center at 88 S. 4th Street, San Jose, CA 95112. It offers 7,163 square feet of event space across four rooms (Pacific Ballroom, Ocean Foyer, Harborview Terrace, and Bayview Terrace) for weddings, corporate, and social events, from 50 seated up to 790+ reception guests across the full floor. Catering is in-house from the Scott's Seafood San Jose culinary team.

## Key pages

- Home: ${abs("/")}
- About: ${abs("/about")}
- Spaces: ${abs("/spaces")}
- Event Types: ${abs("/events")}
- Contact: ${abs("/contact")}
- Accessibility: ${abs("/accessibility")}

## Contact

- Phone: (408) 971-1717
- Email: ballroom@scottshospitality.com
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
