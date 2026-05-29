import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteStatusConfig } from "../config/siteStatus";

/**
 * Next.js 16 Proxy (formerly Middleware)
 * ======================================
 * Intercepts all incoming requests and checks if the site is locked.
 */
export function proxy(request: NextRequest) {
  // Check both environment variable and fallback to the config file
  const envLocked = (process.env.SITE_LOCKED || "").trim() === "true";
  const configLocked = siteStatusConfig.siteLocked;
  const isLocked = envLocked || configLocked;

  const { pathname } = request.nextUrl;

  // Always allow static files, images, and API routes to pass through
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // If site is not locked, pass through immediately
  if (!isLocked) {
    return NextResponse.next();
  }

  // Allow the lock page itself to render (prevent redirect loop)
  if (pathname === "/site-locked") {
    return NextResponse.next();
  }

  // Rewrite all other page requests to the lock page
  const url = request.nextUrl.clone();
  url.pathname = "/site-locked";
  return NextResponse.rewrite(url, {
    headers: {
      "x-site-locked": "true"
    }
  });
}

/**
 * Matcher configuration:
 * Catch all paths and let the proxy function handle the exclusion logic.
 * This is more robust on Vercel Edge than complex regex matchers.
 */
export const config = {
  matcher: "/:path*",
};
