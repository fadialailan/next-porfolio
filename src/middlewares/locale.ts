import { NextRequest, NextResponse } from "next/server";
import Negotiator, {Headers} from "negotiator";

export async function localeMiddleWareFilter(request:NextRequest) {
  const pathnames = request.nextUrl.pathname.split('/')

  const url = new URL("api/languages", process.env.HOST)
  const language_codes:string[] = await (await fetch(url)).json()
  if (language_codes.includes(pathnames[1])) {
    return false
  }

  return true
}

export async function getLocale(request:NextRequest) {
  const url = new URL("api/languages", process.env.HOST)
  const language_codes = await (await fetch(url)).json()

  const negotiator_headers:Headers = {}
  request.headers.forEach((value, key) => negotiator_headers[key] = value)
  const negotiator = new Negotiator({headers: negotiator_headers})

  // TODO: replace with || 'en' with a default locale
  return negotiator.language(language_codes) || 'en'
}

export async function localeMiddleWare(request:NextRequest) {
  const locale = await getLocale(request);
  return NextResponse.redirect(new URL(locale, request.url))

}
