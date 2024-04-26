import ProjectText from "@/schemas/public/ProjectText";
import Link from "next/link";

export type ProjectCardProps = Pick<ProjectText, "name" | "project_id"> & {locale:string; className?:string};

export function ProjectCard(props:ProjectCardProps) {
  return (
    <Link href={`${props.locale}/${props.project_id}`} className={`p-3 rounded-lg text-3xl overflow-hidden w-96 h-40 bg-gray-300 dark:bg-blue-500 ${props.className || ""}`}>
      <img src="images/help-circle.svg" className="w-36 p-2 float-start" />
      <p>
      {props.name}
      </p>
    </Link>
  )
}
