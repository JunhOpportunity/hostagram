import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SideBar from "./components/SideBar";
import SwrTest from "./components/FollowingBar";

export default async function HomePage() {
  const session = await getServerSession(handler);
  const user = session?.user;
  console.log("유저 데이터", user);

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section className="w-full flex flex-col md:flex-row max-w-[850px] p-4 mx-auto gap-10">
      <div className="w-full basis-3/4">
        {/*<ShowPosts />*/}
        <SwrTest email={user.email} />
      </div>
      <div className="basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
