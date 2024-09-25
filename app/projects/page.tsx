//import { BlogPosts } from "app/components/posts"
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import godfather_final from "./processes/godfather_final.png";
import { ProjectProcesses } from "app/components/posts";

export const metadata = {
  title: "Projects",
  description: "View my projects.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div></div>
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        Movie Data Project
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
      </div>
      <Image
        src={godfather_final}
        alt="Bar Chart titled Distance When There is None"
        width={400}
        height={300}
      />
      {/*<BlogPosts />*/}
      {/*<ProjectProcesses />*/}
      <div>
        {" "}
        Amazon Data Project: took my family's Amazon data ranging from 2006-2023
      </div>

      {/*<Script src="./4.032FinalProject/amazonIteration.js" />*/}
      <a
        href="/4.032FinalProject/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        web
      </a>
    </section>
  );
}
