import { ProjectCard } from "./ProjectCard"
import { ProjectTextImage } from "@/models/global_types";


export interface ProjectViewProps {
  projects_text: ProjectTextImage[]
  locale: string;
}

export function ProjectView(props: ProjectViewProps) {

  return (
    <div className="justify-items-center grid gap-4" 
      style={{gridTemplateColumns: "repeat(auto-fit, minmax(24rem,1fr))"}}
    >
      {props.projects_text.map((value, index) => {
        return <ProjectCard key={index} project_text={value} />
      })}
    </div>
  )
}


