import { NextResponse, type NextRequest } from "next/server";

// Public routes that do not require auth
const PUBLIC_PATHS = new Set([
  "/login",
]);

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Allow next assets and public files
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname === "/favicon.ico" ||
      /\.(?:png|jpg|jpeg|svg|gif|webp|ico|txt|xml|json)$/i.test(pathname)
    ) {
      return NextResponse.next();
    }

    // Allow public paths
    if (PUBLIC_PATHS.has(pathname)) {
      return NextResponse.next();
    }

    const hasAuthCookie = request.cookies.get("dh_auth")?.value === "1";

    if (!hasAuthCookie && pathname !== "/login") {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch {
    // Never break the app due to middleware errors
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|txt|xml|json)$).*)",
  ],
};


