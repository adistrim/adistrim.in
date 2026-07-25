export type BlogPost = {
  title: string;
  subtitle: string | null;
  brief: string;
  url: string;
  readTimeInMinutes: number;
  publishedAt: string | null;
  coverImage: {
    url: string | null;
  };
}

export type BlogApiResponse = {
  publication: {
    posts: {
      edges: { node: BlogPost }[];
    };
  };
}
