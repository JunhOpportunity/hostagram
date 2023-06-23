import { ProfileUser } from "@/model/user";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { title: "posts", data: posts },
    { title: "followers", data: followers },
    { title: "following", data: following },
  ];
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 border-b border-neutral-300">
      <Avatar image={image} highlight size="xlarge"/>
      <div className="md:ml-10 basis-1/3">
        <div className="flex flex-col md:flex-row item-center font-black text-lg">
          <h1 className="text-2xl md:mr-8 my-4 md:mb-0">{username}</h1>
          <FollowButton user={user} />
          {/*<div>2 posts 3 followers 4 following</div>*/}
        </div>
        <ul className="my-4 flex gap-4">
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span className="font-bold mr-1">{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold text-center md:text-start ">{name}</p>
      </div>
    </section>
  );
}
