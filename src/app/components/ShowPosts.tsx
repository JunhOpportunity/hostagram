"use client";

import useSWR from "swr";
import { ClipLoader, GridLoader } from "react-spinners";
import { SimplePost } from "@/model/post";
import PostCard from "./PostCard";
import GridSpinner from "./ui/GridSpinner";

export default function ShowPosts() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>(`/api/posts`);
  console.log(" 포스트 ", posts);

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
