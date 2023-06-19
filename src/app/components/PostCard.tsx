"use client";

import PostInfo from "./PostInfo";
import PostDetail from "./PostDetail";
import { useState } from "react";
import Avatar from "./Avatar";
import { SimplePost } from "@/model/post";
import Image from "next/image";
import ModalPortal from "./ui/ModalPortal";

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

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostCard({ post, priority = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (booleanString: boolean) => {
    setIsOpen(booleanString);
  };
  return (
    <section className="shadow-md flex flex-col max-w-[500px] mx-auto">
      <div className="flex items-center p-2 gap-5 text-xl font-black">
        <Avatar image={post.userImage} size="medium" highlight={true} />
        <span className="text-gray-900 font-bold ml-2">{post.username}</span>
      </div>
      <Image
        onClick={() => onClick(true)}
        src={post.image}
        alt={`photo by ${post.username}`}
        width={500}
        height={500}
        className="w-full object-cover aspect-square"
        priority={priority}
      />
      <PostInfo post={post} />
      {isOpen && (
        <ModalPortal>
          <PostDetail post={post} onClick={onClick} />
        </ModalPortal>
      )}
    </section>
  );
}
