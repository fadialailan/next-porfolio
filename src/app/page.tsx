// import * as gettext from 'gettext';
import { ProjectCard } from "@/components/ProjectCard";
import gettext from "@/scripts/gettext";

export default async function Home() {

  return (
    <main>
      <div className="font-bold text-3xl">
        {gettext.gettext("Hello Porfolio")}
        <ProjectCard id={0} description_en={null} name_en="Pixel-art-scaler"/>
      </div>
    </main>
  );
}
