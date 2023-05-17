"use client";

import Image from "next/image";
import { useState } from "react";
import { PostData } from "./PostCard";
import PostDetail from "./PostDetail";

export default function PostIntro({ postData }: PostData) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((e) => !e);
    console.log(isOpen);
  };
  return (
    <section className="shadow-md">
      <div onClick={onClick} className="w-[300px] h-[300px] relative">
        <Image
          src={`${postData.postImageUrl}`}
          fill={true}
          alt="Post Image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <>{isOpen && <PostDetail postData={postData} onClick={setIsOpen} />}</>
    </section>
  );
}