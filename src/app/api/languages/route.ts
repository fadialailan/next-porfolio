import { getLanguagesCodes } from "@/scripts/sql";

export async function GET() {
  const language_codes = await getLanguagesCodes()
  return Response.json(language_codes)
}
