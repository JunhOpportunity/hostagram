'use client'

import { useSession } from "next-auth/react";
import AfterLogin from "./components/AfterLogin";
import BeforeLogin from "./components/BeforeLogin";

export default function Home() {
  const { data: session } = useSession();
  return <>{session ? <AfterLogin /> : <BeforeLogin />}</>;
}
