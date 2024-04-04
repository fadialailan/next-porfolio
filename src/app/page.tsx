// import * as gettext from 'gettext';

import { ProjectView } from "@/components/ProjectsView";
import gettext from "@/scripts/gettext";
import sql, { getProjectsTextByLanguage } from "@/scripts/sql";

sql`SELECT project_id`

export default async function Home() {
  const project_texts = await getProjectsTextByLanguage("en")
  return (
    <main>
      <div className="p-4 font-bold text-3xl">
        {gettext.gettext("Hello Porfolio")}
        <ProjectView  projects_text={project_texts}/>
      </div>
    </main>
  );
}
