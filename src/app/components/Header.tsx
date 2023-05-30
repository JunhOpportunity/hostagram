"use client";

import Link from "next/link";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPlusSquareFill, BsPlusSquare } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
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
          {pathname == "/" ? <AiFillHome /> : <AiOutlineHome />}
        </Link>
        <Link href="/search" className="hover:text-gray-400">
          {pathname == "/search" ? <RiSearchFill /> : <RiSearchLine />}
        </Link>
        <Link href="/newpost" className="hover:text-gray-400">
          {pathname == "/newpost" ? <BsPlusSquareFill /> : <BsPlusSquare />}
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
