import { ProjectText } from "@/models/database";



export function ProjectCard(props:ProjectText) {
  return (
    <div className="rounded-lg p-2 w-96 h-64 bg-gray-500 dark:bg-blue-500">
      {props.name}
    </div>
  )
}
