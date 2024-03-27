// import * as gettext from 'gettext';
import gettext from "@/scripts/gettext";

export default function Home() {
  return (
    <main>
      <div className="dark:text-white font-bold text-3xl">
        {gettext.gettext("Hello Porfolio")}
      </div>
    </main>
  );
}
