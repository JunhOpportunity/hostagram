import { User } from "@/model/user";
import Image from "next/image";
import Link from "next/link";

export default function UserSearchBox({ userData }: { userData: User }) {
  return (
    <Link
      href={`/user/${userData.username}`}
      className="flex items-center gap-1 mx-auto y-[40px] w-[500px] p-[10px] border mt-[10px] cursor-pointer"
    >
      <div className="w-[75px] h-[75px] relative ">
        <Image
          className="rounded-full border-2"
          src={`${userData.image}`}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="User Image"
        />
      </div>
      <div className="flex flex-col">
        <div className="font-black">{userData.username}</div>
        <div>{userData.name}</div>
        <div>3 posts followers following</div>
      </div>
    </Link>
  );
}
