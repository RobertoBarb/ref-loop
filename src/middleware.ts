import { NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "it"],
  defaultLocale: "it",
  urlMappingStrategy: "rewriteDefault",
});

export default function middleware(req: Request) {
  // avoid i18n middleware in /api routes
  if (req.url.includes("/api")) return NextResponse.next();

  return I18nMiddleware(req);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
