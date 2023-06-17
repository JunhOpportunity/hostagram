"use client";

import { getAllPosts } from "@/service/post";
import PostCard, { PostDataType } from "./PostCard";
import useSWR from "swr";
import { ClipLoader } from "react-spinners";
import { SimplePost } from "@/model/post";

export default function ShowPosts() {
  const { data:posts, isLoading, error } = useSWR<SimplePost[]>(`/api/posts`);
  console.log(" 포스트 ", posts);

  if (error) return <div>failed to load</div>;

  return (
    <section>
      {isLoading ? (
        <ClipLoader color="#d63636" />
      ) : (
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id} >
            <PostCard postData={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}