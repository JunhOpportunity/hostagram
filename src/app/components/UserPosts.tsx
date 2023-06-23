"use client";

import { FullPost, SimplePost } from "@/model/post";
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import { BsFileEarmarkPost, BsBookmark, BsHeart } from "react-icons/bs";
import PostIntro from "./PostIntro";
import useSWR from "swr";
import PostIcon from "./ui/icons/PostIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGrid from "./PostGrid";

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "saved", icon: <BookmarkIcon className="w-3 h-3" /> },
  { type: "liked", icon: <HeartIcon className="w-3 h-3" /> },
];

export default function UserPosts({ user: { username } }: Props) {
  const [category, setCategory] = useState(tabs[0].type);  

  const onClick = (categoryName: string) => {
    setCategory(categoryName);
  };

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon }) => (
          <li className={`mx-12 p-4 cursor-pointer border-black ${type == category && 'font-bord border-t'}`} key={type} onClick={()=> setCategory(type)}>
            <button className='scale-150 md:scale-100'>{icon}</button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} category={category}/>

      
    </section>
  );
}
