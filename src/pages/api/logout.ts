// Disabled on the static (GitHub Pages) build. Billing/license logic now lives
// in Supabase Edge Functions + Paddle. This stub keeps the static build valid.
export const prerender = true;
export function GET(): Response {
  return new Response('Not available on the static site.', { status: 404 });
}
