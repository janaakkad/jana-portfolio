// Prefixes public assets with the base path so images and files resolve
// correctly whether the site is served from "/" (dev) or "/jana-portfolio/"
// (GitHub Pages).
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
