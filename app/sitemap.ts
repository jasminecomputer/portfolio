import { getBlogPosts } from "app/blog/utils";
import { getProjects } from "app/projects/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/blog/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  let routes = ["", "/writing", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
