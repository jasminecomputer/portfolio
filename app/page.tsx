import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jasmine Chen
      </h1>
      <p className="mb-4">
        {`Hi! I'm Jasmine, and I recently graduated from MIT, where I studied 
        Computation and Cognition. I'm originally
        from San Diego, CA, but now reside in Cambridge, MA. I'm interested in technology,
        design, and cognition, in no particular order. More recently, I've worked on projects 
        impacting healthcare. If you 
        have similar interests or would like to know more/collaborate, please reach out! 
        `}
      </p>
      <p> {`Email: chenjas[at]mit[dot]edu`}</p>
      <div className="my-8">{/* <BlogPosts />*/}</div>
    </section>
  );
}
