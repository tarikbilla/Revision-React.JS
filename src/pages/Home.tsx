import data from "../data/learing-modules.json";
import { ReactModulesGrid } from "@/components/ReactModulesGrid";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">Revision React.js</h1>
        <p className="mt-4 text-lg text-gray-600">
          I built this project to revise every key concept and keep up with the latest updates in React.js.
          I’ve also created routes for each practice so you can visit them easily, and it’s open source 
          feel free to explore the code.
        </p>
      </section>

      <ReactModulesGrid modules={data} compact />
    </>
  );
}

