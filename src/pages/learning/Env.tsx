import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const appname = import.meta.env.VITE_APP_NAME;
const appversion = import.meta.env.VITE_APP_VERSION;
const author = import.meta.env.VITE_APP_AUTHOR;
const description = import.meta.env.VITE_APP_DESCRIPTION;

export default function Env() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">Environment Setup</h1>
        <p className="mt-4 text-lg text-gray-600">
          This page will guide you through setting up your development environment for React.js.
          Follow the instructions carefully to ensure everything is configured correctly.
        </p>
      </section>

      <Card className="max-w-sm m-auto">
        <div className="flex flex-col items-center">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{appname ?? appname }</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center pb-3">{appversion ?? appversion}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center pt-3 border-t">{description ?? description}</span>
          <span className="text-sm text-blue-500 dark:text-gray-400 text-center pt-3"><Link to={"hppts://tarikbilla.com/"}> {author ?? author}</Link></span>
          <div className="mt-4 flex lg:mt-6">
            <span className="text-black-600">Note: This Card data come from <span className="text-red-600">.env</span> file</span>
          </div>
        </div>
      </Card>

    </>
  );
}