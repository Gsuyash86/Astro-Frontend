import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ url }, next) => {
  const pathname = url.pathname;

  // Block unnecessary or invalid route requests
  if (
    pathname.includes('/.well-known/appspecific/com.chrome.devtools.json') ||
    pathname.includes('/assets/images/shareIcon.svg') ||
    pathname.includes('/sw.js') || 
    pathname.includes('/assets/images/SubscribeBg.webp') || 
    pathname.includes('/favicon.svg')
  ) {
    return new Response('Not Found', { status: 404 });
  }

  return next();
};