"use client";

import { getAllPosts } from "@/service/post";
import { useEffect, useState } from "react";
import PostCard, { PostDataType } from "./PostCard";

export default function ShowPosts() {
  const [allPosts, setAllPosts] = useState<PostDataType[]>([]);

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setAllPosts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {allPosts ? (
        <>
          {allPosts.map((post) => (
            <PostCard postData={post} key={post._createdAt}/>
          ))}
        </>
      ) : (
        <>X</>
      )}
    </>
  );
}
