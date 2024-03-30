import { Project } from "@/models/database";



export function ProjectCard(props:Project) {
  return (
    <div className="rounded-lg p-2 w-96 h-64 bg-gray-500 dark:bg-blue-500">
      {props.name_en}
    </div>
  )
}
