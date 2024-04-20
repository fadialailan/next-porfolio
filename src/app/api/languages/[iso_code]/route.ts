import { getLanguageInfo } from "@/scripts/sql";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const iso_code = req.query.iso_code as string
  const language_info = await getLanguageInfo(iso_code) || null
  res.json(language_info)

}
