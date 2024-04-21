import { getProjectWithText } from "@/scripts/sql";


export default async function project_page({ params }: {
  params: {
    locale: string;
    project_id: string
  }
}) {
  const project_with_text = await getProjectWithText(params.project_id, params.locale);

  return (<main className="p-2">
    <h1 className="text-6xl">{project_with_text.name}</h1>
    <h3>{project_with_text.description}</h3>
  </main>);
}


