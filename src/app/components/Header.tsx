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
        <ColorButton text={"Sing in"} onClick={() => {}} />
      </nav>
    </header>
  );
}
