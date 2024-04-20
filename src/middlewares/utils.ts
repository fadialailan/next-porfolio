import { NextRequest } from "next/server";

export function nextFilter(request:NextRequest) {

  const pathnames = request.nextUrl.pathname.split('/')
  if (pathnames[1] === "_next") {
    return true
  }
  return false
}
