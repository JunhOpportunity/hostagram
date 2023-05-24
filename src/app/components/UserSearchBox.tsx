import Image from "next/image";
import Link from "next/link";
import { UserData } from "./ShowMiniProfile";

export default function UserSearchBox({ userData }: { userData: UserData }) {
  return (
    <Link href={`/user/${userData.userName}`} className="flex items-center gap-1 mx-auto y-[40px] w-[500px] p-[10px] border mt-[10px] cursor-pointer">
      <div className="w-[75px] h-[75px] relative ">
        <Image
          className="rounded-full border-2"
          src={`${userData.userImageUrl}`}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="User Image"
        />
      </div>
      <div className="flex flex-col">
        <div className="font-black">{userData.userName}</div>
        <div>{userData.name}</div>
        <div>
          3 posts {userData.followers} followers {userData.following} following
        </div>
        
      </div>
    </Link>
  );
}
