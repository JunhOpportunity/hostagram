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
import Image from "next/image";

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
  session && console.log(session?.user);
  return (
    <header className="flex justify-between p-2 w-full max-w-screen-xl mx-auto items-center">
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
            href={`/user/${session.user?.name}`}
            className="w-[25px] h-[25px] relative"
          >
            <Image
              className="rounded-full border-2"
              src={`${session.user?.image}`}
              fill={true}
              style={{ objectFit: "cover" }}
              alt="User Image"
            />
          </Link>
        )}
        {session ? (
          <ColorButton text={"Sign out"} onClick={() => signOut()} />
        ) : (
          <ColorButton text={"Sign in"} onClick={() => signIn("google")} />
        )}
      </nav>
    </header>
  );
}
