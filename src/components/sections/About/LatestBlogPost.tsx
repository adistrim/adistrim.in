import Link from "next/link";
import { BookOpen, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getLatestBlogPost } from "@/lib/blogs";
import { formatDateLong } from "@/lib/date";

export default async function LatestBlogPost() {
  const post = await getLatestBlogPost();

  if (!post) {
    return (
      <Card className="w-fit">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-base text-muted-foreground mb-3">
            <BookOpen className="h-5 w-5" />
            <span>Latest Blog Post</span>
          </div>
          <Alert variant="destructive">
            <AlertDescription className="text-sm">
              Failed to load latest post
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  const formattedDate = formatDateLong(post.publishedAt);

  return (
    <Card className="w-fit bg-primary-background">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-base text-muted-foreground">
          <BookOpen className="h-5 w-5" />
          <span>Latest Blog Post</span>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-base leading-tight line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.brief}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTimeInMinutes} min read</span>
            </div>
            <span>{formattedDate}</span>
          </div>

          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Read more <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
