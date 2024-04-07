import Language from "@/schemas/public/Language";
import ProjectText from "@/schemas/public/ProjectText";
import postgres from "postgres";

export const sql = postgres(process.env.DATABASE_URL!, {})

export async function getLanguagesCodes() {
  'use server'
  const language_code_request = sql<Pick<Language, "iso_code">[]>`
    SELECT iso_code FROM language
  `;
  const language_code_rows = await language_code_request
  const language_code_array = language_code_rows.map(value => value.iso_code)
  return language_code_array
}

export function getProjectsTextByLanguage(language_code: string) {
  const project_text_rows_request = sql<ProjectText[]>`SELECT
    language_iso_code, project_id, name, description
    FROM project_text WHERE language_iso_code = ${language_code}
  `
  return project_text_rows_request
}

export default sql;
