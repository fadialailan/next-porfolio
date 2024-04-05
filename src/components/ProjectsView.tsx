import ProjectText from "@/schemas/public/ProjectText"
import { ProjectCard } from "./ProjectCard"


export interface ProjectViewProps {
  projects_text: ProjectText[]
}

export function ProjectView(props: ProjectViewProps) {

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {props.projects_text.map((value, index) => {
        return <ProjectCard key={index} name={value.name} project_id={value.project_id} />
      })}
    </div>
  )
}


