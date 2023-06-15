"use client";

import { User } from "@/model/user";
import { useUser } from "@/service/swr";
import { ClipLoader } from "react-spinners";
import FollowingCarousel from "./FollowingCarousel";

export default function SwrTest({email} : {email: string}) {

  const {user, isError, isLoading} = useUser(email)
  console.log(user);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <ClipLoader color="#d63636" />;

  return (
    <div>
      <FollowingCarousel following={user.data[0].following}/>
    </div>
  );
}