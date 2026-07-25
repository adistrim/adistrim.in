import BlogList from "@/app/blog/BlogList";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-[2rem] dark:text-gray-200 font-bold mb-8">
        Latest Blogs
      </h1>
      <BlogList />
    </div>
  );
}
