import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getBlogs } from "@/lib/blogs";

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default async function BlogList() {
  let blogs;

  try {
    blogs = await getBlogs();
  } catch {
    blogs = null;
  }

  if (!blogs) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Error loading blogs</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {blogs.map((blog: any) => (
        <Link href={blog.url} key={blog.url} className="block no-underline">
          <Card className="group hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-foreground">
                    {blog.title}
                  </h2>

                  {blog.subtitle && (
                    <p className="text-md font-normal text-foreground mb-3">
                      {blog.subtitle}
                    </p>
                  )}

                  <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{dayjs(blog.publishedAt).format("MMMM D, YYYY")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTimeInMinutes} min read</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {truncateText(blog.brief, 150)}
                  </p>
                </div>

                {blog.coverImage?.url && (
                  <div className="w-full md:w-64 h-36 md:h-auto md:flex-shrink-0">
                    <Image
                      src={blog.coverImage.url}
                      alt={blog.title}
                      width={256}
                      height={144}
                      className="w-full h-full object-cover rounded-md"
                      unoptimized
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
