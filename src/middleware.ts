import { NextResponse } from "next/server";

export default function middleware(req: Request) {
  // No middleware needed for now
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
