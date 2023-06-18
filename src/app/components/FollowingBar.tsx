"use client";

import useSWR from "swr";
import { ClipLoader } from "react-spinners";
import { DetailUser } from "@/model/user";
import FollowingCarousel from "./FollowingCarousel";

export default function FollowingBar({ email }: { email: string }) {
  const { data, isLoading, error } = useSWR<DetailUser>(`/api/me`);
  const user = data?.following;

  if (error) return <div>failed to load</div>;
  return (
    <section className="w-full py-[20px] px-[10px] border border-slate-300 rounded-md min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <ClipLoader color="#d63636" />
      ) : !user || user.length == 0 ? (
        <p>{`You don't have following`}</p>
      ) : (
        <FollowingCarousel following={user} />
      )}
    </section>
  );
}
