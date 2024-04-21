import ProjectText from "@/schemas/public/ProjectText";
import Link from "next/link";

export type ProjectCardProps = Pick<ProjectText, "name" | "project_id"> & {locale:string};

export function ProjectCard(props:ProjectCardProps) {
  return (
    <Link href={`${props.locale}/${props.project_id}`} className="p-2 rounded-lg text-3xl text-ellipsis w-72 h-40  bg-gray-300 dark:bg-blue-500 flex-none">
      {props.name}
    </Link>
  )
}
