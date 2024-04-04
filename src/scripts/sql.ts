import { ProjectText } from "@/models/database";
import postgres from "postgres";

export const sql = postgres(process.env.DATABASE_URL!, {})

export function getProjectsTextByLanguage(language_code: string) {
  const project_text_rows_request = sql<ProjectText[]>`SELECT
    language_iso_code, project_id, name, description
    FROM project_text WHERE language_iso_code = ${language_code}
  `
  return project_text_rows_request
}

export default sql;
