import ProjectText from "@/schemas/public/ProjectText"
import { ProjectCard } from "./ProjectCard"


export interface ProjectViewProps {
  projects_text: ProjectText[]
  locale: string;
}

export function ProjectView(props: ProjectViewProps) {

  return (
    <div className="p-4 place-content-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-8 ">
      {props.projects_text.map((value, index) => {
        return <ProjectCard key={index} name={value.name} project_id={value.project_id} locale={props.locale} />
      })}
    </div>
  )
}


