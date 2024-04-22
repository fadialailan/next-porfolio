import { getProjectWithText } from "@/scripts/sql";
import { SiGithub } from "@icons-pack/react-simple-icons";


export default async function project_page({ params }: {
  params: {
    locale: string;
    project_id: string
  }
}) {
  const project_with_text = await getProjectWithText(params.project_id, params.locale);

  return (<main className="p-2">
    <h1 className="text-6xl">{project_with_text.name}</h1>
    {project_with_text.github_url &&
      <a href={project_with_text.github_url}><SiGithub/></a>
    }
    <h3>{project_with_text.description}</h3>
  </main>);
}


