"use client";

import { SimplePost } from "@/model/post";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import PostDetail from "./PostDetail";
import ModalPortal from "./ui/ModalPortal";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostGridCard({ post, priority = false }: Props) {
  const { username, image } = post;
  const [isOpen, setIsOpen] = useState(false);
  const {data: session} = useSession();
  const onClick = (booleanString: boolean) => {
    if(!session?.user) {
      return signIn();
    }
    
    setIsOpen(booleanString);
  };
  return (
    <div className="relative w-full aspect-square">
      <Image className="object-cover" src={image} alt={`photo`} fill sizes="650px" priority={priority} />
      {isOpen && (
        <ModalPortal>
          <PostDetail post={post} onClick={onClick} />
        </ModalPortal>
      )}
    </div>
  );
}
