import { ProjectView } from "@/components/ProjectsView";
import sql, { getProjectsTextImageByLanguage } from "@/scripts/sql";

sql`SELECT project_id`

export default async function Home({params}:{params:{locale:string;}}) {

  const project_texts = await getProjectsTextImageByLanguage(params.locale)
  return (
      <main className="p-4">
        <ProjectView locale={params.locale} projects_text={project_texts}/>
      </main>
  );
}
