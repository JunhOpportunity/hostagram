"use client";

import { User } from "@/model/user";
import { useUser } from "@/service/swr";

export default function SwrTest({email} : {email: string}) {

  const {user, isError, isLoading} = useUser(email)
  console.log(user);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      hello {user.data[0].name}!
      <br />
      follow : {user.data[0].following.length}
      {user.data[0].following.map((item: User) => (
        <div key={item.name}>
          {item.email} / {item.name}
          <img src={`${item.image}`} className="w-[10px] h[10px] rounded-full"/>
        </div>
      ))}
    </div>
  );
}