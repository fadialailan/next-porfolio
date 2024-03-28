// import * as gettext from 'gettext';
import gettext from "@/scripts/gettext";

export default async function Home() {

  return (
    <main>
      <div className="font-bold text-3xl">
        {gettext.gettext("Hello Porfolio")}
      </div>
    </main>
  );
}
