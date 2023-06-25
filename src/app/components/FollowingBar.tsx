"use client";

import { ClipLoader } from "react-spinners";
import FollowingCarousel from "./FollowingCarousel";
import useMe from "@/hooks/me";

export default function FollowingBar({ email }: { email: string }) {
  const { user, isLoading, error } = useMe();

  if (error) return <div>failed to load</div>;
  return (
    <section className="w-full py-[20px] px-[10px] border border-slate-300 rounded-md min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <ClipLoader color="#d63636" />
      ) : !user || user.following.length == 0 ? (
        <p>{`You don't have following`}</p>
      ) : (
        <FollowingCarousel following={user} />
      )}
    </section>
  );
}
