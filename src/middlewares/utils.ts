import { NextRequest } from "next/server";

export function nextFilter(request:NextRequest) {

  const pathnames = request.nextUrl.pathname.split('/')
  if (pathnames[1] === "_next") {
    return true
  }
  return false
}

export function imagesFilter(request:NextRequest) {
  const pathname = request.nextUrl.pathname.split('/')
  if (pathname[0] === "images" || pathname[1] === "images") {
    return true;
  }
  return false
}
