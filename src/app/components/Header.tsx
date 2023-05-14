"use client";

import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between p-2 w-full max-w-6xl mx-auto items-center">
      <Link href="/" className="font-black text-2xl">
        Instagram
      </Link>
      <nav className="flex items-center gap-2 text-xl">
        <Link href="/" className="hover:text-gray-400">
          <AiOutlineHome />
        </Link>
        <Link href="/search" className="hover:text-gray-400">
          <AiOutlineSearch />
        </Link>
        <Link href="/upload" className="hover:text-gray-400">
          <AiOutlinePlusSquare />
        </Link>
        <Link
          href="/signin"
          className="border-2 rounded-md border-red-400 p-1 text-sm font-black hover:text-gray-400"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
}
