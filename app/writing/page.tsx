import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Writing",
  description: "Read some of my writing.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Writing- coming soon!
      </h1>
      <div>
        {" "}
        I hope to host favorite essays for classes, some personal writing, etc.
      </div>
      {/*<BlogPosts />*/}
    </section>
  );
}
