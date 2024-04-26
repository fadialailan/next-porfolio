import ProjectText from "@/schemas/public/ProjectText"
import { ProjectCard } from "./ProjectCard"


export interface ProjectViewProps {
  projects_text: ProjectText[]
  locale: string;
}

export function ProjectView(props: ProjectViewProps) {

  return (
    <div className="justify-items-center grid gap-4" 
      style={{gridTemplateColumns: "repeat(auto-fit, minmax(24rem,1fr))"}}
    >
      {props.projects_text.map((value, index) => {
        return <ProjectCard key={index} name={value.name} project_id={value.project_id} locale={props.locale} />
      })}
    </div>
  )
}


