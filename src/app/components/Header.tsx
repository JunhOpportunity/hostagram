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
          className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-sm font-bold hover:bg-gray-400 hover:cursor-pointer"
        >
          <div className="rounded-md bg-white p-[2px] hover:bg-pink-100">
            Sign in
          </div>
        </Link>
      </nav>
    </header>
  );
}
