import { ProjectText } from "@/models/database";

export type ProjectCardProps = Pick<ProjectText, "name" | "project_id">;

export function ProjectCard(props:ProjectCardProps) {
  return (
    <div className="rounded-lg p-2 w-96 h-64 bg-gray-500 dark:bg-blue-500">
      {props.name}
    </div>
  )
}
