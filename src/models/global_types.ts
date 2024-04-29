import ProjectText from "@/schemas/public/ProjectText";
import Project from "@/schemas/public/Project";

export type ProjectTextImage = ProjectText & Pick<Project, "image_path">

