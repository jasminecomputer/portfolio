import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jasmine Chen
      </h1>
      <p className="mb-4">
        {`Hi! I'm a recent MIT grad, where I studied Computation and Cognition. I like 
        learning about technology, design, and cognition, in no particular order. If you 
        have similar interests or would like to know more, please reach out! 
        Email: chenjas[at]mit[dot]edu 
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
