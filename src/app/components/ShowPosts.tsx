"use client";

import PostCard from "./PostCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/posts";

export default function ShowPosts() {
  const { posts, isLoading, error } = usePosts();

  if (error) return <div>failed to load</div>;

  return (
    <section>
      {isLoading && <GridSpinner color="#d63636" />}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>
              <PostCard post={post} priority={index < 2}/>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
