//import { BlogPosts } from "app/components/posts"
import Image from "next/image";

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
        Godfather Movie Data
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight"></p>
      </div>
      <Image
        src="/projectsinfo/godfather_final.png"
        alt="Bar Chart titled Distance When There is None"
        width={400}
        height={300}
      />
      {/*<BlogPosts />*/}
    </section>
  );
}
