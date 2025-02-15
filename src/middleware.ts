import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("en", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
