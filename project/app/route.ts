import html from "../site.html?raw";
export async function GET() { return new Response(html, {headers:{"Content-Type":"text/html; charset=utf-8", "X-Content-Type-Options":"nosniff", "Referrer-Policy":"strict-origin-when-cross-origin", "Strict-Transport-Security":"max-age=31536000", "Cache-Control":"no-cache"}}); }
