import ProjectText from "@/schemas/public/ProjectText";

export type ProjectCardProps = Pick<ProjectText, "name" | "project_id">;

export function ProjectCard(props:ProjectCardProps) {
  return (
    <div className="rounded-lg p-2 w-80 h-44 bg-gray-300 dark:bg-blue-500">
      {props.name}
    </div>
  )
}
