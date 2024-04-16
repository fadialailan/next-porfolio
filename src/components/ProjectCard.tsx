import ProjectText from "@/schemas/public/ProjectText";

export type ProjectCardProps = Pick<ProjectText, "name" | "project_id">;

export function ProjectCard(props:ProjectCardProps) {
  return (
    <div className="p-2 rounded-lg text-3xl text-ellipsis w-72 h-40  bg-gray-300 dark:bg-blue-500 flex-none">
      {props.name}
    </div>
  )
}
