import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export const generateMetadata = async () => {
  const posts = await getPosts();

  return {
    title: `Browse all our ${posts.length} posts.`,
    description: "Browse all our posts.",
  };
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
