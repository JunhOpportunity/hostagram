import Image from "next/image";
import { UserData } from "./ShowMiniProfile";

type currentUserData = {
  currentUser : UserData;
}

export default function UserProfile({currentUser} : currentUserData) {
  return (
    <section className="flex items-center gap-10 mx-auto my-[40px]">
      <div className="w-[100px] h-[100px] relative ">
        <Image
          className="rounded-full border-2"
          src={`${currentUser.userImageUrl}`}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="User Image"
        />
      </div>
      <div className="flex flex-col gap-2 font-black text-lg">
        <div>{currentUser.userName}</div>
        <div>
          2 posts 3 followers 4 following
        </div>
        <div>{currentUser.name}</div>
      </div>
    </section>
  );
}