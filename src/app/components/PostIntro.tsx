"use client";

import { SimplePost } from "@/model/post";
import Image from "next/image";
import { useState } from "react";
import PostDetail from "./PostDetail";

export default function PostIntro(post: SimplePost) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((e) => !e);
  };
  return (
    <section className="shadow-md">
      <div onClick={onClick} className="w-[300px] h-[300px] relative">
        <Image
          src={`${post.image}`}
          fill={true}
          alt="Post Image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <>{isOpen && <PostDetail post={post} onClick={setIsOpen} />}</>
    </section>
  );
}
