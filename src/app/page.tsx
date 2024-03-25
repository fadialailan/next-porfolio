import { gettext } from 'gettext';

export default function Home() {
  return (
    <main>
      <div className="text-blue-800 font-bold text-3xl">
        {gettext("Hello Porfolio")}
      </div>
    </main>
  );
}
