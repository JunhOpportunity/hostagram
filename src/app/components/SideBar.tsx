import { AuthUser } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: AuthUser;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <section className="flex flex-col gap-5 sticky top-[10px]">
      <div className="flex items-center gap-4">
        <Avatar image={image} size="big" highlight={true} />
        <div className="ml-4">
          <h4 className="font-black">{name}</h4>
          <h5 className="text-lg text-neutral-500">{username}</h5>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8 font-light">API React NextJS TypeScript</p>
    </section>
  );
}
