import { handler } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/app/components/Signin";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Signup or Login to Instagram'
}

type Props = {
  searchParams : {
    callbackUrl: string;
  }
}

export default async function SigninPage({searchParams : {callbackUrl}} : Props) {
  const session = await getServerSession(handler);
  if (session) {
    // 이미 로그인 한 경우
    redirect("/");
  }

  // getPRoviders 를 받아오고, 만약 null인 경우 그냥 텅 빈 객체 반환
  const providers = (await getProviders()) ?? {};
  return (
    <section className='flex justify-center mt-[30%] mx-auto '>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'}/>
    </section>
  );
}
