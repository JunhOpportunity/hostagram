"use client";

import { User } from "@/model/user";
import useSWR from "swr";
import FollowingCarousel from "../components/FollowingCarousel";

export default function Profile() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `/api/user/${"twinjyjh5@gmail.com"}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      hello {data.data[0].name}!
      <br />
      <FollowingCarousel following={data.data[0].following} />
      follow : {data.data[0].following.length}
      {data.data[0].following.map((item: User) => (
        <div key={item.name}>
          {item.email} / {item.name}
          <img src={`${item.image}`} className="w-[10px] h[10px] rounded-full"/>
        </div>
      ))}
    </div>
  );
}
