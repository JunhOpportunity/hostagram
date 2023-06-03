'use client'

import { signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

export default function BeforeLogin() {
  return (
    <section className="h-80 flex justify-center items-center">
      <ColorButton text="Sign in With Google" onClick={()=> signIn('google')}/>
    </section>
  );
}