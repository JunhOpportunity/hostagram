"use client";

import PostInfo from "./PostInfo";
import PostDetail from "./PostDetail";
import { useState } from "react";
import Avatar from "./Avatar";

export type Author = {
  email: string;
  image: string;
  name: string;
  username: string;
};

export type Comment = {
  author: Author;
  comment: string;
  _key: string;
};

export type PostDataType = {
  author: Author;
  likes: Author[];
  postImageUrl: string;
  userName: string;
  _createdAt: string;
  comments: Comment[];
};

export type PostData = {
  postData: PostDataType;
};

export default function PostCard({ postData }: PostData) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (booleanString: boolean) => {
    setIsOpen(booleanString);
  };
  return (
    <section
      className="shadow-md flex flex-col max-w-[500px] mx-auto"
    >
      <div className="flex p-2 gap-5 items-center text-xl font-black">
        <Avatar image={postData.author.image} size="small" highlight={true}/>
        <h5>{postData.author.username}</h5>
      </div>
      <img
        onClick={() => onClick(true)}
        src={`${postData.postImageUrl}`}
        alt="Post Image"
        className="w-[500px] h-[500px] object-cover"
      />
      <PostInfo postData={postData} />
      {isOpen && <PostDetail postData={postData} onClick={onClick} />}
    </section>
  );
}
