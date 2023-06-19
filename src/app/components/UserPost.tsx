"use client";

import { FullPost, SimplePost } from "@/model/post";
import { useState } from "react";
import { BsFileEarmarkPost, BsBookmark, BsHeart } from "react-icons/bs";
import PostIntro from "./PostIntro";

export default function UserPosts(postList: FullPost[]) {
  const [category, setCategory] = useState("posts");
  const onClick = (categoryName: string) => {
    setCategory(categoryName);
  };
  return (
    <section>
      <div className="flex justify-evenly p-4 my-[20px] border-t-2 border-gray-200">
        <div
          className={`flex cursor-pointer items-center ${
            category === "posts" && "font-black"
          }`}
          onClick={() => onClick("posts")}
        >
          <BsFileEarmarkPost />
          POSTS
        </div>
        <div
          className={`flex cursor-pointer items-center ${
            category === "saved" && "font-black"
          }`}
          onClick={() => onClick("saved")}
        >
          <BsBookmark />
          SAVED
        </div>
        <div
          className={`flex cursor-pointer items-center ${
            category === "likes" && "font-black"
          }`}
          onClick={() => onClick("likes")}
        >
          <BsHeart />
          LIKES
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3">
        <ul>
          {postList.map((postData) => (
            <li key={postData.createdAt}>
              {/*<PostIntro post={postData} />*/}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
