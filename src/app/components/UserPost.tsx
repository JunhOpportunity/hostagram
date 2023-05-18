"use client";

import { useState } from "react";
import { BsFileEarmarkPost, BsBookmark, BsHeart } from "react-icons/bs";
import { PostDataType } from "./PostCard";
import PostIntro from "./PostIntro";

type PostListType = {
  postList: PostDataType[];
};

export default function UserPosts({ postList }: PostListType) {
  const [category, setCategory] = useState("posts");
  const onClick = (categoryName: string) => {
    setCategory(categoryName);
  };
  return (
    <section>
      <div className="flex justify-evenly my-[20px] border-t-4 border-gray-400">
        <div
          className={`flex cursor-pointer ${
            category === "posts" && "font-black"
          }`}
          onClick={() => onClick("posts")}
        >
          <BsFileEarmarkPost />
          POSTS
        </div>
        <div
          className={`flex cursor-pointer ${
            category === "saved" && "font-black"
          }`}
          onClick={() => onClick("saved")}
        >
          <BsBookmark />
          SAVED
        </div>
        <div
          className={`flex cursor-pointer ${
            category === "likes" && "font-black"
          }`}
          onClick={() => onClick("likes")}
        >
          <BsHeart />
          LIKES
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3">
        {postList.map((postData) => (
          <PostIntro postData={postData} />
        ))}
      </div>
    </section>
  );
}