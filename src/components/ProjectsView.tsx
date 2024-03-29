import { Project } from "@prisma/client"
import { ProjectCard } from "./ProjectCard"


export interface ProjectViewProps {
  projects: Project[]
}

export function ProjectView(props: ProjectViewProps) {

  return (
    <div>
      {props.projects.map((value, index) => {
        return <ProjectCard key={index} {...value} />
      })}
    </div>
  )
}
