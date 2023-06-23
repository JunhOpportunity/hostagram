import { HomeUser, AuthUser, SearchUser } from "@/model/user";
import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";

type Props = {
  user: SearchUser;
};

export default function UserSearchBox({
  user: { name, username, image, following, followers },
}: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center gap-1 mx-auto y-[40px] w-[500px] p-[10px] border mt-[10px] cursor-pointer"
    >
      <Avatar image={image} />
      <div className="flex flex-col">
        <p className="font-black">{username}</p>
        <p>{name}</p>
        <p>{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
