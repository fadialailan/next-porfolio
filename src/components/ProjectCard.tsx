import { ProjectTextImage } from "@/models/global_types";
import Link from "next/link";

// export type ProjectCardProps = Pick<ProjectText, "name" | "project_id"> & {locale:string; className?:string};
export interface ProjectCardProps {
  project_text: ProjectTextImage;
  className?: string;
}


export function ProjectCard(props:ProjectCardProps) {
  const {project_text} = props;
  return (
    <Link href={`${project_text.language_iso_code}/${project_text.project_id}`} className={`p-3 rounded-lg text-3xl overflow-hidden w-96 h-40 bg-gray-300 dark:bg-blue-500 ${props.className || ""}`}>
      <img src={project_text.image_path || "images/help-circle.svg"} className="w-36 p-2 float-start" />
      <p>
      {project_text.name}
      </p>
    </Link>
  )
}
