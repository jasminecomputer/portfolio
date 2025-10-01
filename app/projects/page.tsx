//import { BlogPosts } from "app/components/posts"
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import godfather_final from "./processes/godfather_final.png";
import { ProjectProcesses } from "app/components/posts";

export const metadata = {
  title: "Projects",
  description: "my projects.",
};

export default function Page() {
  return (
    <section>
      <div>
        {/*<h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>*/}
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">
          Web + Visualization
        </h2>
        <div></div>
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          Movie Data Project
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
          <a
            target="_blank"
            href={"/godfather.png"}
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            png
          </a>
        </div>
        {/* 
      <Image
        src={godfather_final}
        alt="Bar Chart titled Distance When There is None"
        width={400}
        height={300}
      /> */}
        {/*<BlogPosts />*/}
        {/*<ProjectProcesses />*/}
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          {" "}
          Sketch of Fred Again's self-samples
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
          <a
            href="/Songs/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            web
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          Exploration of Amazon data (2006-2023)
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
          {/*<Script src="./4.032FinalProject/amazonIteration.js" />*/}
          <a
            href="/4.032FinalProject/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            web
          </a>
        </div>
      </div>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter mt-10">
        Interactive
      </h2>

      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        {" "}
        Scales/Chords:Mood mapping
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
        <a
          href="/scales.mp4"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          mp4
        </a>
      </div>

      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        {" "}
        Mama's Freezeria (IMS guitar hero)
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
        <a
          href="/mamasIMS.mp4"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          mp4
        </a>
      </div>
      <h2 className="font-semibold text-xl mb-4 tracking-tighter mt-10">
        Graphic
      </h2>

      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        {" "}
        Floss Type System
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
        <a
          href="/alphabet_classicblack.png"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          png
        </a>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
        <a
          href="/alphabet/index.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          web
        </a>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
        <a
          href="/a3-final_mouth-only.png"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          png
        </a>
      </div>
    </section>
  );
}
