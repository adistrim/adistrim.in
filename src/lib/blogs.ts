import { ENV } from "@/config";
import { BlogApiResponse, BlogPost } from "@/types/blog.type";

export async function getBlogs(): Promise<BlogPost[]> {
  if (!ENV.base || !ENV.secret || !ENV.apiKey) {
    throw new Error(
      "Missing env vars: BLOG_SITE_URL, BLOG_SECRET_PATH, or BLOG_API_KEY"
    );
  }

  const res = await fetch(`${ENV.base}/api/${ENV.secret}/blog`, {
    headers: {
      "x-api-key": ENV.apiKey,
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Blog fetch failed: ${res.status} ${res.statusText}`);
  }

  const json: BlogApiResponse = await res.json();
  return json.publication.posts.edges.map((edge) => edge.node);
}

export async function getLatestBlogPost(): Promise<BlogPost | null> {
  try {
    const blogs = await getBlogs();
    return blogs[0] || null;
  } catch (err) {
    return null;
  }
}

