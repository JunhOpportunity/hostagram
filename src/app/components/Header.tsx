"use client";

import Link from "next/link";
import {
  HomeFillIcon,
  HomeIcon,
  NewFillIcon,
  NewIcon,
  SearchFillIcon,
  SearchIcon,
} from "./ui/icons";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "./Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="flex justify-between p-2 w-full max-w-screen-xl mx-auto items-center sticky top-[0px] z-1 bg-white">
      <Link href="/" className="font-black text-2xl">
        Instagram
      </Link>
      <nav className="flex items-center gap-2 text-xl">
        {menu.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="hover:text-gray-400"
          >
            {pathname == item.href ? item.clickedIcon : item.icon}
          </Link>
        ))}
        {session && (
          <Link
            href={`/user/${user?.name}`}
          >
            <Avatar image={user?.image} size="small" highlight={true}/>
          </Link>
        )}
        {session ? (
          <ColorButton text={"Sign out"} onClick={() => signOut()} size='small'/>
        ) : (
          <ColorButton text={"Sign in"} onClick={() => signIn()} size='small'/>
        )}
      </nav>
    </header>
  );
}
