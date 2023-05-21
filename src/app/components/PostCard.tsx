"use client";

import Image from "next/image";
import UserImage from "./UserImage";
import PostInfo from "./PostInfo";
import PostDetail from "./PostDetail";
import { useState } from "react";

export type Comment = {
  userComment: string;
  userName: string;
  userImageurl: string;
};

export type PostDataType = {
  userImageUrl: string;
  postImageUrl: string;
  likedNumber: number;
  userName: string;
  title: string;
  createdAt: string;
  comments: Comment[];
};

export type PostData = {
  postData: PostDataType;
};

export default function PostCard({ postData }: PostData) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((e) => !e);
  };
  return (
    <section className="shadow-md flex flex-col max-w-[500px] mx-auto">
      <div className="flex p-2 gap-5 items-center text-xl font-black">
        <UserImage userImageUrl={postData.userImageUrl} />
        <h5>{postData.userName}</h5>
      </div>
      <div onClick={onClick} className="w-[500px] h-[500px] relative">
        <Image
          src={`${postData.postImageUrl}`}
          fill={true}
          alt="Post Image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <PostInfo postData={postData} />
      {isOpen && <PostDetail postData={postData} onClick={setIsOpen} />}
    </section>
  );
}
