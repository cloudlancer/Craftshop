import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js 16 Proxy (formerly Middleware)
 * ======================================
 * Intercepts all incoming requests and checks if the site is locked.
 *
 * When SITE_LOCKED=true:
 *   - All page requests are rewritten to /site-locked
 *   - Static assets (_next/static, images, etc.) pass through
 *   - The /site-locked route itself passes through (no loop)
 *
 * When SITE_LOCKED is not "true":
 *   - All requests pass through normally — zero overhead
 */
export function proxy(request: NextRequest) {
  const isLocked = process.env.SITE_LOCKED === "true";

  // If site is not locked, pass through immediately
  if (!isLocked) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow the lock page itself to render (prevent redirect loop)
  if (pathname === "/site-locked") {
    return NextResponse.next();
  }

  // Rewrite all other page requests to the lock page
  const url = request.nextUrl.clone();
  url.pathname = "/site-locked";
  return NextResponse.rewrite(url);
}

/**
 * Matcher configuration:
 * Only intercept page/document requests.
 * Skip static files, image optimization, and metadata files.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
