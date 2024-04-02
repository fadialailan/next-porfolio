export interface Project {
  id: number;
  image_path: String | null;
  github_url : String | null;
  website_url : String | null;
}

export interface Language {
  iso_code:String;
  name:String;
  direction: "rtl" | "ltr"; // rtl: right-to-left, ltr: left-to-right
}

export interface ProjectText {
  language_iso_code:String;
  project_id:String;
  name:String;
  description:String
}
