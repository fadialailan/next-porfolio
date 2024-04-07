import { NextRequest } from "next/server";
import { localeMiddleWare, localeMiddleWareFilter } from "./middlewares/locale";
import { nextFilter } from "./middlewares/utils";

export async function middleware(request:NextRequest) {
  if (nextFilter(request)) {
    return;
  }
  else if (await localeMiddleWareFilter(request)){
    return await localeMiddleWare(request)
  }
}
